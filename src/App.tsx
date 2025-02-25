import React, { useState } from 'react';
import { storyPages } from './data/story';
import { GameState, Choice } from './types';
import { Facebook, Twitter, Dumbbell as Tumblr, MoreHorizontal, Sparkles } from 'lucide-react';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentPage: 'start',
    history: ['start']
  });

  const handleChoice = (choice: Choice) => {
    setGameState(prev => ({
      currentPage: choice.nextPage,
      history: [...prev.history, choice.nextPage]
    }));
  };

  const handleRestart = () => {
    setGameState({
      currentPage: 'start',
      history: ['start']
    });
  };

  const currentPage = storyPages[gameState.currentPage];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://cdn.midjourney.com/fefb97ec-7028-4c4b-89d8-51da583677fc/0_3.png)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#1a1a1a]">
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-7xl font-bold mb-6">
              THE<br />
              DREADFUL NIGHTS <br />
              of HARLEM
            </h1>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
             Harlem, 1926—where jazz and danger intertwine. PI Lawrence Hughes uncovers a stolen artifact tied to an ancient force, drawing him into a battle against supernatural horrors. Shadowy cults, creatures of legend, and a city on the brink—every choice matters. Some truths should stay buried. Will you survive the night?
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-[#4a3426] hover:bg-[#5a4436] transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#4a3426] hover:bg-[#5a4436] transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#4a3426] hover:bg-[#5a4436] transition-colors flex items-center justify-center">
                <Tumblr className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#4a3426] hover:bg-[#5a4436] transition-colors flex items-center justify-center">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-[#1a1a1a] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="prose prose-invert">
              <div className="text-[#c4a484]">
                {currentPage.content}
              </div>
              
              {!currentPage.isEnding && currentPage.choices && (
                <div className="mt-8 space-y-4">
                  {currentPage.choices.map((choice, index) => (
                    <button
                      key={index}
                      onClick={() => handleChoice(choice)}
                      className="w-full text-left px-6 py-4 bg-[#4a3426] hover:bg-[#5a4436] rounded-lg text-[#c4a484] transition-colors flex items-center gap-3"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>{choice.text}</span>
                    </button>
                  ))}
                </div>
              )}
              
              {currentPage.isEnding && (
                <div className="mt-8">
                  <button
                    onClick={handleRestart}
                    className="w-full text-center px-6 py-4 bg-[#4a3426] hover:bg-[#5a4436] rounded-lg text-[#c4a484] transition-colors"
                  >
                    Start Over
                  </button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 h-[500px]">
              {currentPage.images.map((image, index) => (
                <div 
                  key={index}
                  className={`transform ${
                    index === 0 ? 'rotate-2' : 
                    index === 1 ? '-rotate-2' : 
                    'rotate-1'
                  } hover:rotate-0 transition-transform duration-300`}
                >
                  <img 
                    src={image}
                    alt={`Story Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;