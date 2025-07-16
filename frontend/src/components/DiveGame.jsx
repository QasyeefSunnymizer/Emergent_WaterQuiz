import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { diveLocations } from '../mock';

const DiveGame = () => {
  const navigate = useNavigate();
  const { locationId } = useParams();
  const [currentCreatureIndex, setCurrentCreatureIndex] = useState(0);
  const [gamePhase, setGamePhase] = useState('identify'); // 'identify', 'trivia', 'complete'
  const [userGuess, setUserGuess] = useState('');
  const [currentTriviaIndex, setCurrentTriviaIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [completedCreatures, setCompletedCreatures] = useState([]);

  const location = diveLocations.find(loc => loc.id === parseInt(locationId));
  
  if (!location) {
    return <div>Location not found</div>;
  }

  const currentCreature = location.creatures[currentCreatureIndex];
  const currentTrivia = currentCreature.trivia[currentTriviaIndex];
  const isLastCreature = currentCreatureIndex === location.creatures.length - 1;

  const handleIdentifySubmit = () => {
    const isCorrect = userGuess.toLowerCase().trim() === currentCreature.commonName.toLowerCase();
    
    if (isCorrect) {
      setGamePhase('trivia');
      setCurrentTriviaIndex(0);
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setShowFeedback(true);
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
      setTimeout(() => {
        setShowFeedback(false);
        setUserGuess('');
      }, 2000);
    }
  };

  const handleTriviaAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    const isCorrect = currentTrivia.type === 'multiple_choice' 
      ? answerIndex === currentTrivia.answer
      : answerIndex === (currentTrivia.answer ? 1 : 0);
    
    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
    
    setTimeout(() => {
      if (currentTriviaIndex < currentCreature.trivia.length - 1) {
        setCurrentTriviaIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        // Creature complete
        setCompletedCreatures(prev => [...prev, currentCreatureIndex]);
        if (isLastCreature) {
          navigate(`/location-trivia/${locationId}`);
        } else {
          setCurrentCreatureIndex(prev => prev + 1);
          setGamePhase('identify');
          setCurrentTriviaIndex(0);
          setSelectedAnswer(null);
          setShowFeedback(false);
          setUserGuess('');
        }
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-700 to-blue-900 p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/20 to-blue-900/40" />
      
      {/* Animated marine life */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-pulse"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          >
            {['🐠', '🐟', '🦈', '🐙', '🐢', '🦑', '🐚', '🪸'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <Button
            onClick={() => navigate('/level-select')}
            variant="outline"
            className="mb-4 bg-white/80 hover:bg-white/90 border-white/50"
          >
            ← Back to Level Select
          </Button>
          
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            {location.icon} {location.name} - Diving!
          </h1>
          
          <div className="flex justify-center space-x-4 mb-4">
            <Badge variant="secondary" className="bg-white/80 text-blue-900">
              Creature {currentCreatureIndex + 1} of {location.creatures.length}
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Score: {score.correct}/{score.total}
            </Badge>
          </div>

          <div className="flex justify-center space-x-2">
            {location.creatures.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  completedCreatures.includes(index)
                    ? 'bg-green-400 scale-125'
                    : index === currentCreatureIndex
                    ? 'bg-yellow-400 scale-110'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-blue-900">
              {gamePhase === 'identify' ? 'Identify This Creature!' : 'Trivia Time!'}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {gamePhase === 'identify' ? (
              <>
                <div 
                  className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg mx-auto"
                  style={{
                    backgroundImage: `url(${currentCreature.image})`,
                    backgroundSize: 'cover'
                  }}
                />
                
                <div className="text-center">
                  <p className="text-blue-700 text-lg mb-4">
                    What is the name of this marine creature?
                  </p>
                  
                  <div className="max-w-md mx-auto">
                    <Input
                      type="text"
                      placeholder="Enter the creature's name..."
                      value={userGuess}
                      onChange={(e) => setUserGuess(e.target.value)}
                      className="mb-4 text-center text-lg"
                      onKeyPress={(e) => e.key === 'Enter' && handleIdentifySubmit()}
                    />
                    
                    <Button
                      onClick={handleIdentifySubmit}
                      disabled={!userGuess.trim()}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      Submit Guess
                    </Button>
                  </div>
                  
                  {showFeedback && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
                      <p className="text-red-700 font-semibold">
                        ❌ Not quite right! Try again.
                      </p>
                      <p className="text-red-600 text-sm mt-2">
                        Hint: This creature is a {currentCreature.commonName}
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Question {currentTriviaIndex + 1} of {currentCreature.trivia.length}
                  </h3>
                  <p className="text-blue-800 text-lg mb-6">
                    {currentTrivia.question}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {currentTrivia.type === 'multiple_choice' ? (
                    currentTrivia.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleTriviaAnswer(index)}
                        disabled={showFeedback}
                        variant={
                          showFeedback
                            ? index === currentTrivia.answer
                              ? 'default'
                              : selectedAnswer === index
                              ? 'destructive'
                              : 'outline'
                            : 'outline'
                        }
                        className={`w-full p-4 text-left justify-start ${
                          showFeedback && index === currentTrivia.answer
                            ? 'bg-green-500 hover:bg-green-600 text-white'
                            : showFeedback && selectedAnswer === index && index !== currentTrivia.answer
                            ? 'bg-red-500 hover:bg-red-600 text-white'
                            : 'bg-white/80 hover:bg-white/90 text-blue-900'
                        }`}
                      >
                        {option}
                      </Button>
                    ))
                  ) : (
                    ['True', 'False'].map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleTriviaAnswer(index)}
                        disabled={showFeedback}
                        variant={
                          showFeedback
                            ? (currentTrivia.answer && index === 1) || (!currentTrivia.answer && index === 0)
                              ? 'default'
                              : selectedAnswer === index
                              ? 'destructive'
                              : 'outline'
                            : 'outline'
                        }
                        className={`w-full p-4 text-left justify-start ${
                          showFeedback && ((currentTrivia.answer && index === 1) || (!currentTrivia.answer && index === 0))
                            ? 'bg-green-500 hover:bg-green-600 text-white'
                            : showFeedback && selectedAnswer === index && !((currentTrivia.answer && index === 1) || (!currentTrivia.answer && index === 0))
                            ? 'bg-red-500 hover:bg-red-600 text-white'
                            : 'bg-white/80 hover:bg-white/90 text-blue-900'
                        }`}
                      >
                        {option}
                      </Button>
                    ))
                  )}
                </div>
                
                {showFeedback && (
                  <div className="mt-4 p-4 bg-blue-100 border border-blue-300 rounded-lg">
                    <p className="text-blue-800 font-semibold mb-2">
                      💡 Explanation:
                    </p>
                    <p className="text-blue-700">
                      {currentTrivia.explanation}
                    </p>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiveGame;