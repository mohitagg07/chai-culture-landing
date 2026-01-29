import React from 'react';

const CornerPattern = ({ className }) => (
  <svg viewBox="0 0 200 200" className={`absolute w-32 h-32 md:w-64 md:h-64 opacity-20 text-gold pointer-events-none ${className}`}>
    <path fill="currentColor" d="M0 0 L100 0 C150 0 200 50 200 100 L200 200 L0 0 Z" />
    <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.5" />
    <path fill="none" stroke="currentColor" strokeWidth="2" d="M10 10 Q 100 20 180 180" />
  </svg>
);

export default CornerPattern;