export type LanguageCode = 'ZH' | 'EN' | 'ID' | 'KM' | 'LO' | 'MY' | 'TH' | 'VI' | 'FR' | 'ES' | 'TA' | 'AR' | 'HI' | 'IT';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  speechLang: string;
}

export interface User {
  email: string;
  name:string;
  mobile: string;
  country: string;
}

export interface Payment {
  date: string;
  amount: number;
  method: 'PayPal' | 'Stripe';
}

export interface Word {
  [key: string]: string;
}

export interface Topic {
  topic: string;
  words: Word[];
}

export interface LearntWord {
  word: Word; // The full word object
  fromLangCode: LanguageCode;
  toLangCode: LanguageCode;
  isCorrect: boolean | null; // null = not yet practiced, true = correct, false = incorrect
}

export interface LearntPhrase {
  phrase: Word;
  fromLangCode: LanguageCode;
  toLangCode: LanguageCode;
  isCorrect: boolean | null;
}

export interface EmergencyContact {
  id: number;
  name: string;
  phone: string;
}

export interface OtherNumber {
    id: number;
    name: string;
    phone: string;
}

export interface CountryInfo {
    police: string;
    ambulance: string;
    fire: string;
    embassyInfo: string;
}

export interface NewsItem {
    headline: string;
    summary: string;
}

export interface AppContextType {
  fromLang: LanguageCode;
  toLang: LanguageCode;
  setFromLang: (lang: LanguageCode) => void;
  setToLang: (lang: LanguageCode) => void;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  learntWords: LearntWord[];
  addLearntWords: (words: LearntWord[]) => void;
  updateLearntWord: (word: Word, fromLangCode: LanguageCode, toLangCode: LanguageCode, isCorrect: boolean) => void;
  learntPhrases: LearntPhrase[];
  addLearntPhrase: (phrase: LearntPhrase) => void;
  updateLearntPhrase: (phrase: Word, fromLangCode: LanguageCode, toLangCode: LanguageCode, isCorrect: boolean) => void;
  emergencyContacts: EmergencyContact[];
  setEmergencyContacts: (contacts: EmergencyContact[]) => void;
  otherNumbers: OtherNumber[];
  setOtherNumbers: (numbers: OtherNumber[]) => void;
}
