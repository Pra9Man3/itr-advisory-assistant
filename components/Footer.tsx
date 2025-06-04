
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto pt-8 text-center text-slate-400 text-xs sm:text-sm">
      <p>&copy; {currentYear} ITR Advisory Assistant. All advice is AI-generated and for informational purposes only.</p>
      <p>Always consult with a qualified professional for specific tax matters.</p>
    </footer>
  );
};
