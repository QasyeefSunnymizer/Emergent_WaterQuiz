import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { tenggolTrivia } from '../mock';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-blue-800/40" />
      
      {/* Floating island elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-pulse"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          >
            {['🏝️', '🌴', '🌊', '🐚', '⛵', '🌅'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-4 bg-white/80 hover:bg-white/90 border-white/50"
          >
            ← Back to Menu
          </Button>
          
          <div className="text-8xl mb-4 animate-bounce">🏝️</div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Tenggol Island
          </h1>
          <p className="text-2xl text-blue-100 drop-shadow mb-4">
            A pristine diving paradise
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-blue-900">
              About This Special Place
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌊</div>
              <p className="text-blue-800 text-lg leading-relaxed">
                Tenggol Island is a hidden gem located off the coast of Terengganu, Malaysia. 
                This pristine island is renowned for its crystal-clear waters, vibrant coral reefs, 
                and diverse marine life that makes it a perfect natural classroom for learning 
                about ocean conservation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                  🌿 Eco-Friendly Tourism
                </h3>
                <p className="text-blue-800 text-sm">
                  With only a handful of small resorts and no large hotels, Tenggol Island 
                  maintains its natural beauty and healthy marine ecosystems.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2 flex items-center">
                  🐠 Marine Biodiversity
                </h3>
                <p className="text-green-800 text-sm">
                  The island's waters are home to over 200 species of fish, sea turtles, 
                  sharks, and colorful coral formations that create underwater gardens.
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-2 flex items-center">
                  🏊 Perfect for Learning
                </h3>
                <p className="text-purple-800 text-sm">
                  The calm, clear waters and diverse marine life make it an ideal location 
                  for educational diving experiences and marine biology studies.
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-2 flex items-center">
                  🌅 Unspoiled Beauty
                </h3>
                <p className="text-orange-800 text-sm">
                  Many visitors describe Tenggol as feeling like other Malaysian islands 
                  did decades ago - untouched, peaceful, and naturally beautiful.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-blue-900">
              🧠 Test Your Knowledge!
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {tenggolTrivia.map((trivia, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold mb-2">
                  {trivia.question}
                </p>
                <p className="text-blue-700 text-sm">
                  💡 {trivia.explanation}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button
            onClick={() => navigate('/level-select')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
          >
            🤿 Ready to Dive?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;