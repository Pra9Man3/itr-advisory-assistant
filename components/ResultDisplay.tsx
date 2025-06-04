
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown (tables, strikethrough, etc.)

interface ResultDisplayProps {
  advice: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ advice }) => {
  return (
    <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-slate-700/70 rounded-lg shadow-inner">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-300">Tax Advisory:</h2>
      <div className="prose prose-sm sm:prose-base prose-invert max-w-none 
                      prose-headings:text-sky-400 prose-strong:text-slate-100 
                      prose-bullets:marker:text-sky-400 prose-a:text-sky-400 hover:prose-a:text-sky-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{advice}</ReactMarkdown>
      </div>
    </div>
  );
};
