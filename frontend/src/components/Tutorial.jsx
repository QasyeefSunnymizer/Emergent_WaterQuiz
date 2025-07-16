import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { diveLocations } from '../mock';

const Tutorial = () => {
  const navigate = useNavigate();
  const { locationId } = useParams();
  const [currentCreatureIndex, setCurrentCreatureIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const location = diveLocations.find(loc => loc.id === parseInt(locationId));
  
  if (!location) {
    return <div>Location not found</div>;
  }

  const currentCreature = location.creatures[currentCreatureIndex];
  const isLastCreature = currentCreatureIndex === location.creatures.length - 1;

  const handleNext = () => {
    if (isLastCreature) {
      navigate(`/dive-game/${locationId}`);
    } else {
      setCurrentCreatureIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCreatureIndex > 0) {
      setCurrentCreatureIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-blue-800/40" />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 15}px`,
              height: `${Math.random() * 30 + 15}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
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
            {location.icon} {location.name}
          </h1>
          <p className="text-xl text-blue-100 drop-shadow">
            Learn about the marine life before you dive!
          </p>
          
          <div className="mt-4">
            <Badge variant="secondary" className="bg-white/80 text-blue-900">
              {currentCreatureIndex + 1} of {location.creatures.length}
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Flip Card */}
            <div 
              className={`relative w-full h-96 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front of card */}
              <Card className="absolute inset-0 w-full h-full bg-white/95 backdrop-blur-sm shadow-2xl border-0 backface-hidden">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-blue-900">
                    {currentCreature.commonName}
                  </CardTitle>
                  <p className="text-blue-700 italic">
                    {currentCreature.scientificName}
                  </p>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg mb-4 shadow-lg"
                    style={{
                      backgroundImage: `url(${currentCreature.image})`,
                      backgroundSize: 'cover'
                    }}
                  />
                  
                  <div className="text-blue-600 text-lg font-medium mb-4">
                    Click to flip and learn more! 🔄
                  </div>
                </CardContent>
              </Card>

              {/* Back of card */}
              <Card className="absolute inset-0 w-full h-full bg-white/95 backdrop-blur-sm shadow-2xl border-0 backface-hidden rotate-y-180">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-bold text-blue-900">
                    {currentCreature.commonName}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-blue-800">Color: </span>
                      <span className="text-blue-700">{currentCreature.color}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800">Shape: </span>
                      <span className="text-blue-700">{currentCreature.shape}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800">Size: </span>
                      <span className="text-blue-700">{currentCreature.size}</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">🤔 Fun Fact:</h4>
                    <p className="text-blue-800">{currentCreature.funFact}</p>
                  </div>
                  
                  <div className="text-blue-600 text-sm text-center">
                    Click again to flip back! 🔄
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentCreatureIndex === 0}
            variant="outline"
            className="bg-white/80 hover:bg-white/90 border-white/50 disabled:opacity-50"
          >
            ← Previous
          </Button>

          <div className="flex space-x-2">
            {location.creatures.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentCreatureIndex(index);
                  setIsFlipped(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentCreatureIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {isLastCreature ? '🤿 Start Diving!' : 'Next →'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;