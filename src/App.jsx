import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import CornerPattern from './components/CornerPattern';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    // BG: Rich Dark Mahogany Gradient (matches the deep red/brown in screenshots)
    <div className="min-h-screen bg-[radial-gradient(circle_at_30%_50%,#2b100a_0%,#180806_80%)] text-cream relative flex items-center justify-center overflow-hidden font-body p-6">
      
      {/* Decorative Corners */}
      <CornerPattern className="top-0 left-0" />
      <CornerPattern className="top-0 right-0 rotate-90" />
      <CornerPattern className="bottom-0 left-0 -rotate-90" />
      <CornerPattern className="bottom-0 right-0 rotate-180" />
      
      <main className={`relative z-20 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[80vh] transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col justify-center items-start text-left pl-4 md:pl-12 space-y-6 order-2 md:order-1 relative z-30">
          
          {/* Logo */}
          <div className="relative mb-4">
             <div className="absolute -inset-4 bg-gold-300 blur-2xl opacity-10"></div>
             <img src="/logo.jpeg" alt="Logo" className="relative w-24 h-24 rounded-full border-2 border-gold-300 shadow-2xl object-cover" />
          </div>

          {/* TYPOGRAPHY: Stacked Title */}
          <div className="leading-[0.85]">
            <h1 className="font-royal text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#faeeb8] via-[#dcb35b] to-[#9e792e] block mb-2 drop-shadow-lg">
              CHAI
            </h1>
            <h1 className="font-royal text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#faeeb8] via-[#dcb35b] to-[#9e792e] block drop-shadow-lg">
              CULTURE
            </h1>
            
            <p className="font-script text-3xl md:text-4xl text-[#dcb35b] mt-6 tracking-wide">
              "Brew the Royal Tradition"
            </p>
          </div>

          <p className="font-body text-[#f3e5d0]/90 text-xl md:text-2xl leading-relaxed max-w-lg">
            A premium instant chai premix inspired by the royal kitchens of India. 
            Experience heritage, warmth, and elegance in every sip.
          </p>

          <div className="pt-2">
            <span className="px-6 py-1.5 border border-[#9e792e] rounded-full text-[#dcb35b] text-xs uppercase tracking-[0.25em] bg-black/30">
              Launching Soon
            </span>
          </div>

          {/* SIGNUP FORM - Matched to Screenshot */}
          <div className="w-full max-w-md pt-4">
            <form className="flex flex-col md:flex-row gap-4 items-stretch">
              {/* Input: Dark Transparent */}
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="flex-1 bg-[#2b100a]/30 border border-[#9e792e]/40 rounded-sm px-4 py-3 text-[#f3e5d0] placeholder-[#f3e5d0]/30 focus:outline-none focus:border-[#dcb35b] transition font-body text-lg"
              />
              
              {/* Button: SOLID BRIGHT GOLD with WHITE TEXT (Matches image_e1b186.png) */}
              <button className="bg-[#ffca28] hover:bg-[#ffc107] text-white font-bold font-royal px-8 py-3 rounded-sm shadow-[0_4px_14px_rgba(255,202,40,0.3)] hover:scale-105 transition uppercase tracking-widest text-sm">
                Notify Me
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-4">
            <Instagram className="w-6 h-6 text-[#dcb35b] hover:text-[#faeeb8] cursor-pointer transition transform hover:scale-110" />
            <Twitter className="w-6 h-6 text-[#dcb35b] hover:text-[#faeeb8] cursor-pointer transition transform hover:scale-110" />
            <Facebook className="w-6 h-6 text-[#dcb35b] hover:text-[#faeeb8] cursor-pointer transition transform hover:scale-110" />
          </div>
          
        </div>

        {/* RIGHT COLUMN: The Seamless Blend */}
        <div className="relative h-[60vh] md:h-screen w-full order-1 md:order-2 flex items-center justify-end z-10 overflow-hidden">
           
           {/* THE FIX: Pure CSS Mask 
               - Transparent at 0% -> Fully Visible at 50%
               - This allows the dark background gradient to show through the image naturally.
               - No "patches" or "covers" to create mismatched seams.
           */}
           <img 
             src="/tea.webp" 
             alt="Royal Masala Chai" 
             className="absolute inset-0 w-full h-full object-cover object-center"
             style={{ 
               maskImage: 'linear-gradient(to right, transparent 0%, transparent 5%, black 50%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 5%, black 50%, black 100%)' 
             }}
           />

        </div>

      </main>
    </div>
  );
};

export default App;