
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { LANGUAGES } from '../constants';
import type { LanguageCode, Word, CountryInfo, NewsItem } from '../types';

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const phoneticsCache: Record<string, string> = JSON.parse(localStorage.getItem('lingotrek-phonetics') || '{}');

const savePhoneticsCache = () => {
    try {
        localStorage.setItem('lingotrek-phonetics', JSON.stringify(phoneticsCache));
    } catch (e) {
        console.error("Could not save phonetics cache, might be full.", e);
    }
};

export const getPhonetics = async (word: string, langCode: LanguageCode): Promise<string> => {
    const cacheKey = `${langCode}-${word}`.toLowerCase();
    if (phoneticsCache[cacheKey]) {
        return phoneticsCache[cacheKey];
    }
    if (!process.env.API_KEY) {
        return `/${word.toLowerCase()}/`; // Mock phonetic if no API key
    }
    try {
        const langName = LANGUAGES[langCode].name;
        const prompt = `Provide the International Phonetic Alphabet (IPA) transcription for the word "${word}" in ${langName}. Return only the IPA string itself, without any extra text or explanation. For example, for "Hello" in English, you would return just "/həˈloʊ/". Word: "${word}"`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-preview-04-17',
            contents: prompt,
        });

        const phonetic = response.text.trim();
        if (phonetic) {
            phoneticsCache[cacheKey] = phonetic;
            savePhoneticsCache();
        }
        return phonetic;
    } catch (error) {
        console.error(`Error getting phonetics for "${word}"`, error);
        return "";
    }
};

export const translateText = async (
  text: string,
  from: LanguageCode,
  to: LanguageCode
): Promise<string> => {
  if (!text.trim()) {
    return "";
  }
  if (!process.env.API_KEY) {
      // Return a mock translation if API key is not available
      return `Mock translation of "${text}" to ${LANGUAGES[to].name}`;
  }
  try {
    const fromLanguage = LANGUAGES[from].name;
    const toLanguage = LANGUAGES[to].name;
    const prompt = `Translate the following text from ${fromLanguage} to ${toLanguage}. Provide only the translated text, without any additional explanations or context. Text to translate: "${text}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error translating text:", error);
    return "Translation failed.";
  }
};


export const generatePhrase = async (word: Word, langCode: LanguageCode): Promise<Word | null> => {
    if (!process.env.API_KEY) {
        return {
            [langCode]: `Mock phrase for ${word[langCode]}`,
            'EN': `Mock English phrase for ${word['EN']}`
        };
    }
    try {
        const langName = LANGUAGES[langCode].name;
        const englishWord = word['EN'];
        const nativeWord = word[langCode];

        const prompt = `Create a simple, common travel-related sentence in ${langName} using the word "${nativeWord}". Also provide the exact English translation of that sentence. Return the response as a JSON object with keys "native" and "english". Example for word 'water': {"native": "...", "english": "Can I have some water?"}.`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-04-17",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            },
        });

        let jsonStr = response.text.trim();
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }

        const parsedData = JSON.parse(jsonStr);

        if (parsedData.native && parsedData.english) {
            return {
                [langCode]: parsedData.native,
                'EN': parsedData.english,
            };
        }
        return null;
    } catch (error) {
        console.error("Error generating phrase:", error);
        return null;
    }
}

export const generateCombinedPhrase = async (words: Word[], langCode: LanguageCode): Promise<Word | null> => {
    if (!process.env.API_KEY || words.length === 0) {
        return {
            [langCode]: `Mock combined phrase for ${words.map(w => w[langCode]).join(', ')}`,
            'EN': `Mock English combined phrase for ${words.map(w => w.EN).join(', ')}`
        };
    }
    try {
        const langName = LANGUAGES[langCode].name;
        const nativeWords = words.map(w => w[langCode]);
        
        const prompt = `You are a language learning assistant. Create a single, simple, coherent travel-related sentence in ${langName} that uses several of the following words: "${nativeWords.join(', ')}". Then provide the exact English translation of that sentence. Return ONLY a JSON object with keys "native" and "english", without any markdown formatting. Example: {"native": "...", "english": "..."}.`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-04-17",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            },
        });

        let jsonStr = response.text.trim();
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }

        const parsedData = JSON.parse(jsonStr);

        if (parsedData.native && parsedData.english) {
            return {
                [langCode]: parsedData.native,
                'EN': parsedData.english,
            };
        }
        return null;
    } catch (error) {
        console.error("Error generating combined phrase:", error);
        return null;
    }
}

export const getEmergencyInfo = async (countryName: string): Promise<CountryInfo | null> => {
    if (!process.env.API_KEY) {
        return { police: '111', ambulance: '222', fire: '333', embassyInfo: 'Embassy info not available without API key.'};
    }
    try {
        const prompt = `Provide common emergency numbers for ${countryName} (police, ambulance, fire). Also provide a short, generic text explaining how a tourist can find their specific embassy's contact information, as this varies by the tourist's nationality. Return ONLY a JSON object with keys "police", "ambulance", "fire", and "embassyInfo". Ensure the phone numbers are strings.`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-04-17",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            },
        });

        let jsonStr = response.text.trim();
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }

        return JSON.parse(jsonStr);
    } catch (error) {
        console.error("Error getting emergency info:", error);
        return null;
    }
};

export const getNews = async (countryName: string): Promise<{ news: NewsItem[], sources: any[] } | null> => {
    if (!process.env.API_KEY) {
        return { news: [{ headline: 'Mock News Headline', summary: 'This is a mock news summary because the API key is missing.' }], sources: [] };
    }
    
    let response: GenerateContentResponse;
    try {
        const prompt = `Provide 3 recent top news headlines and a brief one-sentence summary for each in ${countryName}, focusing on topics relevant to tourists like crime rates, safety alerts, major events, or travel advisories. Return ONLY a JSON array of objects, where each object has "headline" and "summary" keys. If there is no specific news, return an empty array.`;
        
        response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-04-17",
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }],
            },
        });

        let jsonStr = response.text.trim();
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }
        
        const news = JSON.parse(jsonStr);
        const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
        
        // Ensure news is an array
        if (Array.isArray(news)) {
            return { news, sources };
        } else {
             throw new Error("Parsed news is not an array");
        }

    } catch (error) {
        console.error("Error getting or parsing news as JSON:", error);
        // Fallback: If JSON parsing fails, treat the entire text response as a summary.
        if (response && response.text) {
             const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
             return {
                 news: [{ headline: 'Safety News Summary', summary: response.text }],
                 sources
             };
        }
        return null;
    }
};
