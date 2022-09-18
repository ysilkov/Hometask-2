import { ideaLogo, quoteLogo, taskLogo, thoughtLogo } from "./logo.js";

export interface categoriesType {
  Idea: string;
  Quote: string;
  Task: string;
  "Random Thought": string;
}
export const categories: categoriesType = {
  Idea: ideaLogo,
  Quote: quoteLogo,
  Task: taskLogo,
  "Random Thought": thoughtLogo,
};
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const dataCreate = `${
  month[new Date().getMonth()]
}, ${new Date().getDate()}, ${new Date().getFullYear()}`;
export const dataChangeNote = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
export interface ModalWindowUpdateProps {
  modalActiveEdit: boolean;
  setModalActiveEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
export interface ModalWindowCreateProps {
  modalActiveCreate: boolean;
  setModalActiveCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
export interface newNote {
  name: string;
  category: string;
  content: string;
}

