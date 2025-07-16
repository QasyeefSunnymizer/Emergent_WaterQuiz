from motor.motor_asyncio import AsyncIOMotorClient
import os

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
locations_collection = db.dive_locations
tenggol_trivia_collection = db.tenggol_trivia
game_progress_collection = db.game_progress

async def init_database():
    """Initialize the database with game data"""
    # Check if locations already exist
    existing_locations = await locations_collection.count_documents({})
    if existing_locations == 0:
        await seed_database()

async def seed_database():
    """Seed the database with initial game data"""
    from seed_data import get_seed_data
    seed_data = get_seed_data()
    
    # Insert dive locations
    for location in seed_data['locations']:
        await locations_collection.insert_one(location)
    
    # Insert Tenggol trivia
    for trivia in seed_data['tenggol_trivia']:
        await tenggol_trivia_collection.insert_one(trivia)
    
    print("Database seeded successfully!")

async def get_locations():
    """Get all dive locations"""
    cursor = locations_collection.find({})
    locations = await cursor.to_list(length=None)
    return locations

async def get_location_by_id(location_id: int):
    """Get a specific location by ID"""
    location = await locations_collection.find_one({"id": location_id})
    return location

async def get_tenggol_trivia():
    """Get Tenggol Island trivia"""
    cursor = tenggol_trivia_collection.find({})
    trivia = await cursor.to_list(length=None)
    return trivia

async def create_game_progress(progress_data: dict):
    """Create a new game progress record"""
    result = await game_progress_collection.insert_one(progress_data)
    return result.inserted_id

async def get_game_progress(progress_id: str):
    """Get game progress by ID"""
    progress = await game_progress_collection.find_one({"id": progress_id})
    return progress

async def update_game_progress(progress_id: str, update_data: dict):
    """Update game progress"""
    result = await game_progress_collection.update_one(
        {"id": progress_id},
        {"$set": update_data}
    )
    return result.modified_count > 0

async def get_all_game_progress():
    """Get all game progress records"""
    cursor = game_progress_collection.find({})
    progress_list = await cursor.to_list(length=None)
    return progress_list