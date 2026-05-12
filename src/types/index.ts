export interface Animal {
  id: string;
  name: string;
  species: string;
  description: string;
  image: string;
  category: AnimalCategory;
  facts: string[];
}

export type AnimalCategory = 'mammal' | 'bird' | 'reptile' | 'fish' | 'amphibian' | 'insect';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  category: AnimalCategory;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
}

export type RootStackParamList = {
  Main: undefined;
  AnimalDetail: { animalId: string };
  Quiz: undefined;
  QuizResult: { result: QuizResult };
};

export type MainTabParamList = {
  Home: undefined;
  Animals: undefined;
  Preferences: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type Theme = 'light' | 'dark';
