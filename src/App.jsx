import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

// Corner Pattern Component (The Gold Designs)
const CornerPattern = ({ className }) => (
  <svg viewBox="0 0 200 200" className={`absolute w-32 h-32 md:w-64 md:h-64 opacity-20 text-gold pointer-events-none ${className}`}>
    <path fill="currentColor" d="M0 0 L100 0 C150 0 200 50 200 100 L200 200 L0 0 Z" />
    <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.5" />
    <path fill="none" stroke="currentColor" strokeWidth="2" d="M10 10 Q 100 20 180 180" />
  </svg>
);

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-royal text-cream relative flex items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND ORNAMENTS --- */}
      <CornerPattern className="top-0 left-0" />
      <CornerPattern className="top-0 right-0 rotate-90" />
      <CornerPattern className="bottom-0 left-0 -rotate-90" />
      <CornerPattern className="bottom-0 right-0 rotate-180" />

      {/* Dark Vignette Overlay (Shadows on edges) */}
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{ background: 'radial-gradient(circle, transparent 20%, #000000 140%)' }}>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <main className={`relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-screen transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* LEFT COLUMN: BRANDING & FORM */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:pl-20 space-y-6 order-2 md:order-1">
          
          {/* Logo Area */}
          <div className="relative group">
             <div className="absolute -inset-4 bg-gold blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
             <img src="/logo.jpeg" alt="Chai Culture Logo" className="relative w-28 h-28 object-cover rounded-full border-2 border-gold shadow-2xl" />
          </div>

          {/* Typography */}
          <div>
            <h1 className="font-serif text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#bf953f] drop-shadow-md mb-2">
              CHAI CULTURE
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gold italic tracking-widest">
              "Brew the Royal Tradition"
            </p>
          </div>

          <p className="text-cream/80 max-w-md text-lg leading-relaxed">
            A premium instant chai premix inspired by the royal kitchens of India. 
            Experience heritage, warmth, and elegance in every sip.
          </p>

          <div className="py-2">
            <span className="px-5 py-1 border border-gold/30 text-gold text-xs uppercase tracking-[0.3em] rounded-full">
              Launching Soon
            </span>
          </div>

          {/* Signup Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="flex-1 bg-white/5 border border-gold/30 rounded px-5 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold focus:bg-white/10 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-royal font-bold uppercase tracking-wider px-8 py-3 rounded shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:scale-105 transition transform">
                Notify Me
              </button>
            </form>
          ) : (
            <div className="w-full p-4 border border-gold bg-gold/10 text-gold text-center font-serif rounded">
              Welcome to the Royal Family.
            </div>
          )}

          {/* Footer Socials */}
          <div className="flex gap-6 text-gold/60 pt-4">
            <Instagram className="hover:text-gold cursor-pointer transition" />
            <Twitter className="hover:text-gold cursor-pointer transition" />
            <Facebook className="hover:text-gold cursor-pointer transition" />
          </div>
        </div>

        {/* RIGHT COLUMN: TEA IMAGE (The Polish) */}
        <div className="relative h-[50vh] md:h-screen w-full order-1 md:order-2 overflow-hidden">
           {/* This is the MAGIC part. 
              1. We use your 'tea.webp'
              2. We use 'maskImage' to fade the left side into the background 
           */}
           <img 
             src="/tea.webp" 
             alt="Royal Masala Chai" 
             className="absolute inset-0 w-full h-full object-cover opacity-90"
             style={{ 
               maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)' 
             }}
           />
           
           {/* Extra Overlay for warmth */}
           <div className="absolute inset-0 bg-gradient-to-t from-royal via-transparent to-transparent opacity-60"></div>
           
           {/* Floating Steam Particles (Animation) */}
           <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-gold rounded-full blur-sm opacity-60 animate-bounce"></div>
        </div>

      </main>
    </div>
  );
};

export default App;