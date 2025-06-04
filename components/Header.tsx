
import React from 'react';
import { APP_TITLE, APP_SUBTITLE } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="mb-6 sm:mb-10 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300 py-2">
        {APP_TITLE}
      </h1>
      <p className="text-slate-300 text-sm sm:text-base">{APP_SUBTITLE}</p>
    </header>
  );
};
