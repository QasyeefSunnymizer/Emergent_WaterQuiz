import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-blue-900/40" />
      
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <Card className="relative z-10 max-w-md w-full bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4 animate-pulse">🌊</div>
            <h1 className="text-4xl font-bold text-blue-900 mb-2">
              Tenggol Dive
            </h1>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Adventure
            </h2>
            <p className="text-blue-600 text-lg">
              Discover Malaysian Marine Wildlife
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/level-select')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🐠 Start Diving
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/about')}
              className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 py-4 rounded-xl"
            >
              🏝️ About Tenggol Island
            </Button>
          </div>

          <div className="mt-8 text-sm text-blue-500">
            <p>🎯 Educational • 🌊 Kid-Friendly • 🐟 Interactive</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainMenu;