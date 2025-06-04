import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const getTaxAdvice = async (topic: string): Promise<string> => {
  if (!topic || topic.trim().length === 0) {
    throw new Error("Please enter a valid tax topic.");
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      { text: `Provide professional income tax return advice for FY 2025-26 on: ${topic}` },
    ]);

    const response = await result.response;
    return await response.text();

  } catch (error: any) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to retrieve AI response. Please check API Key and topic.");
  }
};
