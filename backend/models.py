from pydantic import BaseModel, Field
from typing import List, Optional, Union
from datetime import datetime
import uuid

class TriviaQuestion(BaseModel):
    question: str
    type: str  # "multiple_choice" or "true_false"
    options: Optional[List[str]] = None  # For multiple choice
    answer: Union[int, bool]  # Index for multiple choice, boolean for true/false
    explanation: str

class Creature(BaseModel):
    id: int
    commonName: str
    scientificName: str
    color: str
    shape: str
    size: str
    funFact: str
    image: str
    trivia: List[TriviaQuestion]

class DiveLocation(BaseModel):
    id: int
    name: str
    icon: str
    description: str
    backgroundImage: str
    creatures: List[Creature]
    locationTrivia: List[TriviaQuestion]

class TenggolTrivia(BaseModel):
    question: str
    type: str
    answer: Union[int, bool]
    explanation: str

class GameProgress(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    player_name: Optional[str] = None
    location_id: int
    completed_creatures: List[int] = []
    current_creature_index: int = 0
    score: dict = {"correct": 0, "total": 0}
    completed_at: Optional[datetime] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class GameProgressCreate(BaseModel):
    player_name: Optional[str] = None
    location_id: int

class GameProgressUpdate(BaseModel):
    completed_creatures: Optional[List[int]] = None
    current_creature_index: Optional[int] = None
    score: Optional[dict] = None
    completed_at: Optional[datetime] = None