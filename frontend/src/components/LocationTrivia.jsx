import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { diveLocations } from '../mock';

const LocationTrivia = () => {
  const navigate = useNavigate();
  const { locationId } = useParams();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const location = diveLocations.find(loc => loc.id === parseInt(locationId));
  
  if (!location) {
    return <div>Location not found</div>;
  }

  // Get random trivia question
  const randomTriviaIndex = Math.floor(Math.random() * location.locationTrivia.length);
  const triviaQuestion = location.locationTrivia[randomTriviaIndex];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    const correct = triviaQuestion.type === 'multiple_choice' 
      ? answerIndex === triviaQuestion.answer
      : answerIndex === (triviaQuestion.answer ? 1 : 0);
    
    setIsCorrect(correct);
    setShowFeedback(true);
    
    setTimeout(() => {
      navigate('/level-select');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 via-green-600 to-green-800 p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/20 to-green-800/40" />
      
      {/* Celebration particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          >
            {['🎉', '⭐', '🏆', '🎊', '✨', '🌟'][i % 6]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-8xl mb-4 animate-pulse">🏆</div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Level Complete!
          </h1>
          <p className="text-2xl text-green-100 drop-shadow mb-4">
            You've mastered {location.name}!
          </p>
          
          <Badge variant="secondary" className="bg-white/90 text-green-800 text-lg px-6 py-2">
            {location.icon} All {location.creatures.length} creatures identified!
          </Badge>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-green-900">
              Bonus Question!
            </CardTitle>
            <p className="text-green-700 text-lg">
              Test your knowledge about {location.name}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <p className="text-green-800 text-xl mb-6">
                {triviaQuestion.question}
              </p>
            </div>
            
            <div className="space-y-3">
              {triviaQuestion.type === 'multiple_choice' ? (
                triviaQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    variant={
                      showFeedback
                        ? index === triviaQuestion.answer
                          ? 'default'
                          : selectedAnswer === index
                          ? 'destructive'
                          : 'outline'
                        : 'outline'
                    }
                    className={`w-full p-4 text-left justify-start ${
                      showFeedback && index === triviaQuestion.answer
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : showFeedback && selectedAnswer === index && index !== triviaQuestion.answer
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-white/80 hover:bg-white/90 text-green-900'
                    }`}
                  >
                    {option}
                  </Button>
                ))
              ) : (
                ['True', 'False'].map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    variant={
                      showFeedback
                        ? (triviaQuestion.answer && index === 1) || (!triviaQuestion.answer && index === 0)
                          ? 'default'
                          : selectedAnswer === index
                          ? 'destructive'
                          : 'outline'
                        : 'outline'
                    }
                    className={`w-full p-4 text-left justify-start ${
                      showFeedback && ((triviaQuestion.answer && index === 1) || (!triviaQuestion.answer && index === 0))
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : showFeedback && selectedAnswer === index && !((triviaQuestion.answer && index === 1) || (!triviaQuestion.answer && index === 0))
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-white/80 hover:bg-white/90 text-green-900'
                    }`}
                  >
                    {option}
                  </Button>
                ))
              )}
            </div>
            
            {showFeedback && (
              <div className={`mt-4 p-6 rounded-lg ${
                isCorrect 
                  ? 'bg-green-100 border border-green-300' 
                  : 'bg-red-100 border border-red-300'
              }`}>
                <p className={`font-semibold mb-2 ${
                  isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isCorrect ? '🎉 Excellent!' : '❌ Not quite right!'}
                </p>
                <p className={`mb-4 ${
                  isCorrect ? 'text-green-700' : 'text-red-700'
                }`}>
                  {triviaQuestion.explanation}
                </p>
                <p className="text-blue-600 font-medium">
                  Returning to level select in 4 seconds...
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {!showFeedback && (
          <div className="text-center">
            <Button
              onClick={() => navigate('/level-select')}
              variant="outline"
              className="bg-white/80 hover:bg-white/90 border-white/50"
            >
              Skip to Level Select
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationTrivia;