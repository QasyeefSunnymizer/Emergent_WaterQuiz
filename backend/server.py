from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

# Import our models and database functions
from models import DiveLocation, TenggolTrivia, GameProgress, GameProgressCreate, GameProgressUpdate
from database import (
    init_database, get_locations, get_location_by_id, get_tenggol_trivia,
    create_game_progress, get_game_progress, update_game_progress, get_all_game_progress
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Tenggol Dive Adventure API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models for legacy endpoints
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Legacy routes
@api_router.get("/")
async def root():
    return {"message": "Welcome to Tenggol Dive Adventure API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Game API routes
@api_router.get("/locations", response_model=List[DiveLocation])
async def get_dive_locations():
    """Get all dive locations with creatures and trivia"""
    try:
        locations = await get_locations()
        return locations
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/locations/{location_id}", response_model=DiveLocation)
async def get_dive_location(location_id: int):
    """Get a specific dive location by ID"""
    try:
        location = await get_location_by_id(location_id)
        if not location:
            raise HTTPException(status_code=404, detail="Location not found")
        return location
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/tenggol-trivia", response_model=List[TenggolTrivia])
async def get_tenggol_island_trivia():
    """Get Tenggol Island trivia questions"""
    try:
        trivia = await get_tenggol_trivia()
        return trivia
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/game-progress", response_model=GameProgress)
async def create_game_progress_record(progress: GameProgressCreate):
    """Create a new game progress record"""
    try:
        progress_data = progress.dict()
        progress_obj = GameProgress(**progress_data)
        await create_game_progress(progress_obj.dict())
        return progress_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/game-progress/{progress_id}", response_model=GameProgress)
async def get_game_progress_record(progress_id: str):
    """Get game progress by ID"""
    try:
        progress = await get_game_progress(progress_id)
        if not progress:
            raise HTTPException(status_code=404, detail="Game progress not found")
        return progress
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.put("/game-progress/{progress_id}", response_model=GameProgress)
async def update_game_progress_record(progress_id: str, update_data: GameProgressUpdate):
    """Update game progress"""
    try:
        update_dict = {k: v for k, v in update_data.dict().items() if v is not None}
        success = await update_game_progress(progress_id, update_dict)
        if not success:
            raise HTTPException(status_code=404, detail="Game progress not found")
        
        updated_progress = await get_game_progress(progress_id)
        return updated_progress
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/game-progress", response_model=List[GameProgress])
async def get_all_game_progress_records():
    """Get all game progress records"""
    try:
        progress_list = await get_all_game_progress()
        return progress_list
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    """Initialize the database on startup"""
    await init_database()
    logger.info("Database initialized successfully")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
