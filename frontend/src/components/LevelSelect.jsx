import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { diveLocations } from '../mock';

const LevelSelect = () => {
  const navigate = useNavigate();

  const handleLocationSelect = (location) => {
    navigate(`/tutorial/${location.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-blue-800/40" />
      
      {/* Animated sea creatures */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-pulse"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          >
            {['🐠', '🐟', '🦈', '🐙', '🐢', '🦑'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-4 bg-white/80 hover:bg-white/90 border-white/50"
          >
            ← Back to Menu
          </Button>
          
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Choose Your Dive Site
          </h1>
          <p className="text-xl text-blue-100 drop-shadow">
            Explore the underwater world of Tenggol Island
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diveLocations.map((location) => (
            <Card
              key={location.id}
              className="bg-white/90 backdrop-blur-sm hover:bg-white/95 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer border-0"
              onClick={() => handleLocationSelect(location)}
            >
              <CardHeader className="text-center pb-2">
                <div className="text-6xl mb-2 animate-bounce">
                  {location.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">
                  {location.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-blue-700 text-lg mb-4">
                  {location.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 mb-2">
                    Marine Life ({location.creatures.length} species):
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {location.creatures.slice(0, 3).map((creature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {creature.commonName}
                      </span>
                    ))}
                    {location.creatures.length > 3 && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        +{location.creatures.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLocationSelect(location);
                  }}
                >
                  🤿 Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 inline-block">
            <CardContent className="p-6">
              <div className="text-4xl mb-2">🌊</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Tenggol Bonus Fun Fact
              </h3>
              <p className="text-blue-700 max-w-2xl">
                The entire island has only a handful of resorts and no big hotels — 
                so the reefs stay healthy and uncrowded. Many divers say Tenggol feels 
                like the Perhentian Islands 30 years ago!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LevelSelect;