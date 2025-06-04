
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ResultDisplay } from './components/ResultDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { getTaxAdvice } from './services/geminiService';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setError('Please enter a tax topic.');
      setAdvice(null);
      return;
    }
    setTopic(searchTerm);
    setIsLoading(true);
    setError(null);
    setAdvice(null);

    try {
      const result = await getTaxAdvice(searchTerm);
      setAdvice(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
      console.error("Error fetching tax advice:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-3xl bg-slate-800/80 shadow-2xl rounded-xl p-6 sm:p-10 backdrop-blur-md flex flex-col flex-grow">
        <Header />
        <main className="flex-grow">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {advice && !isLoading && <ResultDisplay advice={advice} />}
          {!advice && !isLoading && !error && (
            <div className="mt-8 text-center text-slate-400">
              <p className="text-lg">Enter a tax topic above to get AI-powered advice for FY 2025-26.</p>
              <p className="text-sm mt-2">For example: "Capital Gains Tax for Shares" or "Section 80C Deductions".</p>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
