import type { Item, FillInBlank } from "./items";

export interface QuestionBase {
  title: string;
  description: string;
}

export interface SingleChoice extends QuestionBase {
  type: "singleChoice";
  choices: Item[];
}

export interface MultipleChoice extends QuestionBase {
  type: "multipleChoice";
  choices: Item[];
}

export interface SingleFillInBlank extends QuestionBase {
  type: "singleFillInBlank";
  answer: string;
}

export interface MultiFillInBlank extends QuestionBase {
  type: "multiFillInBlank";
  items: { label: string; answer: string }[];
}

export interface Rating extends QuestionBase {
  type: "rating";
  scale: number;
}

export type Question = SingleChoice | MultipleChoice | SingleFillInBlank | MultiFillInBlank | Rating;

export const mockQuestions: Question[] = [
  {
    type: "singleChoice",
    title: "What is your favorite color?",
    description: "Please select one from the options below.",
    choices: [
      {
        type: "choice",
        content: "Red",
      },
      {
        type: "choice",
        content: "Blue",
      },
      {
        type: "choice",
        content: "Green",
      },
      {
        type: "choice",
        content: "Yellow",
      },
      {
        type: "choice",
        content: "Purple",
      },
    ],
  },
  {
    type: "multipleChoice",
    title: "Which of the following fruits do you like?",
    description: "You can select more than one option.",
    choices: [
      {
        type: "choice",
        content: "Apple",
      },
      {
        type: "choice",
        content: "Banana",
      },
      {
        type: "choice",
        content: "Cherry",
      },
      {
        type: "choice",
        content: "Durian",
      },
      {
        type: "choice",
        content: "Elderberry",
      },
    ],
  },
  {
    type: "singleFillInBlank",
    title: "What is your name?",
    description: "Please enter your full name.",
    answer: "",
  },
  {
    type: "multiFillInBlank",
    title: "Please fill in your address.",
    description: "Include your street, city, state, and zip code.",
    items: [
      {
        label: "street",
        answer: "",
      },
      {
        label: "city",
        answer: "",
      },
      {
        label: "state",
        answer: "",
      },
      {
        label: "zip code",
        answer: "",
      },
    ],
  },
  {
    type: "rating",
    title: "How would you rate our service?",
    description: "On a scale of 1 to 5, with 5 being the best.",
    scale: 5,
  },
];
