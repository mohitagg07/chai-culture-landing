import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Facebook, CheckCircle } from 'lucide-react';
import CornerPattern from './components/CornerPattern';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success'

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // This STOPS the page refresh
    if (!email) return;

    setStatus('loading');

    // Simulate sending data to a server (1.5 seconds delay)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    // BG: Deep Royal Mahogany Gradient
    <div className="min-h-screen bg-[radial-gradient(circle_at_30%_50%,#2b100a_0%,#180806_80%)] text-cream relative flex items-center justify-center overflow-hidden font-body p-4 md:p-6">
      
      {/* Decorative Corners */}
      <CornerPattern className="top-0 left-0 w-16 h-16 md:w-32 md:h-32" />
      <CornerPattern className="top-0 right-0 rotate-90 w-16 h-16 md:w-32 md:h-32" />
      <CornerPattern className="bottom-0 left-0 -rotate-90 w-16 h-16 md:w-32 md:h-32" />
      <CornerPattern className="bottom-0 right-0 rotate-180 w-16 h-16 md:w-32 md:h-32" />
      
      <main className={`relative z-20 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center min-h-[80vh] transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col justify-center items-start text-left pl-2 md:pl-12 space-y-4 md:space-y-6 order-2 md:order-1 relative z-30 pt-10 md:pt-0">
          
          {/* Logo */}
          <div className="relative mb-2 md:mb-4">
             <div className="absolute -inset-4 bg-gold-300 blur-2xl opacity-10"></div>
             <img src="/logo.jpeg" alt="Logo" className="relative w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-gold-300 shadow-2xl object-cover" />
          </div>

          {/* TYPOGRAPHY */}
          <div className="leading-[0.9]">
            <h1 className="font-royal text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#faeeb8] via-[#dcb35b] to-[#9e792e] block mb-2 drop-shadow-lg">
              CHAI
            </h1>
            <h1 className="font-royal text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#faeeb8] via-[#dcb35b] to-[#9e792e] block drop-shadow-lg">
              CULTURE
            </h1>
            
            <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#dcb35b] mt-4 md:mt-6 tracking-wide">
              "Brew the Royal Tradition"
            </p>
          </div>

          <p className="font-body text-[#f3e5d0]/90 text-base sm:text-lg md:text-2xl leading-relaxed max-w-lg">
            A premium instant chai premix inspired by the royal kitchens of India. 
            Experience heritage, warmth, and elegance in every sip.
          </p>

          <div className="pt-2">
            <span className="px-4 py-1 md:px-6 md:py-1.5 border border-[#9e792e] rounded-full text-[#dcb35b] text-[10px] md:text-xs uppercase tracking-[0.25em] bg-black/30">
              Launching Soon
            </span>
          </div>

          {/* SIGNUP FORM LOGIC */}
          <div className="w-full max-w-md pt-4 h-24"> {/* Added fixed height to prevent layout jump */}
            
            {status === 'success' ? (
              // SUCCESS MESSAGE
              <div className="flex items-center gap-3 p-4 border border-[#dcb35b]/30 bg-[#dcb35b]/10 rounded-sm animate-fade-in">
                <CheckCircle className="text-[#dcb35b] w-6 h-6" />
                <span className="text-[#dcb35b] font-royal text-lg tracking-wide">
                  Welcome to the Royal List.
                </span>
              </div>
            ) : (
              // FORM
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-stretch transition-opacity duration-300">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address" 
                  required
                  className="flex-1 bg-[#2b100a]/30 border border-[#9e792e]/40 rounded-sm px-4 py-3 text-[#f3e5d0] placeholder-[#f3e5d0]/30 focus:outline-none focus:border-[#dcb35b] transition font-body text-base md:text-lg"
                />
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className={`bg-[#dcb35b] hover:bg-[#faeeb8] text-[#2b100a] font-bold font-royal px-8 py-3 rounded-sm shadow-[0_4px_14px_rgba(220,179,91,0.3)] hover:scale-105 transition uppercase tracking-widest text-xs md:text-sm whitespace-nowrap ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? 'SENDING...' : 'NOTIFY ME'}
                </button>
              </form>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-4 pb-8 md:pb-0">
            <Instagram className="w-5 h-5 md:w-6 md:h-6 text-[#dcb35b] hover:text-[#faeeb8] cursor-pointer transition transform hover:scale-110" />
            <Twitter className="w-5 h-5 md:w-6 md:h-6 text-[#dcb35b] hover:text-[#faeeb8] cursor-pointer transition transform hover:scale-110" />
            <Facebook className="w-5 h-5 md:w-6 md:h-6 text-[#dcb35b] hover:text-[#faeeb8] cursor-pointer transition transform hover:scale-110" />
          </div>
          
        </div>

        {/* RIGHT COLUMN: The Seamless Blend */}
        <div className="relative h-[40vh] md:h-screen w-full order-1 md:order-2 flex items-center justify-end z-10 overflow-hidden">
           
           {/* THE BLEND MASK */}
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