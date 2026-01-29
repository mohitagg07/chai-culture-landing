import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="w-full p-4 border border-gold bg-gold/10 text-gold text-center font-serif text-xl rounded animate-fade-in">
        Welcome to the Royal Family.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-4 mt-4">
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="flex-1 bg-white/5 border border-gold/40 rounded px-5 py-3 text-cream placeholder-cream/50 text-lg focus:outline-none focus:border-gold-light focus:bg-white/10 transition font-body"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button 
        type="submit" 
        className="bg-gradient-to-r from-[#ffe082] via-[#ffca28] to-[#ffe082] text-royal font-bold uppercase tracking-wider px-8 py-3 rounded shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition transform font-serif text-sm"
      >
        Notify Me
      </button>
    </form>
  );
};

export default SignupForm;