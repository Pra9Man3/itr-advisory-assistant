
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="mt-6 p-4 bg-red-800/40 text-red-300 border border-red-700 rounded-lg shadow-md">
      <p className="font-semibold">Error:</p>
      <p>{message}</p>
    </div>
  );
};
