import { ideaLogo, quoteLogo, taskLogo, thoughtLogo } from "./logo.js";
export let categories = {
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
  export const dataCreate = `${month[new Date().getMonth()]}, ${new Date().getDate()}, ${new Date().getFullYear()}`
  export const dataChangeNote = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
