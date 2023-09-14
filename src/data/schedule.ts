type lecture = {
  title: string;
  slidesLink?: string;
  lectureCodeLink?: string;
  recordingLink?: string;
};

export const schedule: lecture[] = [
  {
    title: "Course Overview and Git",
    slidesLink:
      "https://docs.google.com/presentation/d/105P1oNZwBpHfMQLeTnaNQtLMHhRsotx0OHdm4ki6Hws/edit?usp=sharing",
    recordingLink: "https://www.youtube.com/watch?v=HNwaTFEUHSs",
  },
  {
    title: "JavaScript",
    slidesLink:
      "https://docs.google.com/presentation/d/1ScgDd2E9kQaIz2Lnu08eNXCUIFBdbpOwyMWqxfVD3NA/edit?usp=sharing",
    lectureCodeLink:
      "https://codesandbox.io/p/sandbox/lecture-2-code-javascript-gd5kjy?file=/index.js:3,1",
    recordingLink: "https://www.youtube.com/watch?v=lFBrkgigltI",
  },
  {
    title: "TypeScript",
    slidesLink:
      "https://docs.google.com/presentation/d/1XR1-FW7A4egR6jCSyddYZLoIvqiFxl_CVhUmhvRUnkM/edit?usp=sharing",
    lectureCodeLink:
      "https://codesandbox.io/p/sandbox/lecture-3-typescript-hyshrm",
  },
  {
    title: "Asynchronous TypeScript and API Basics",
  },
  {
    title: "Relational Data Modeling and Prisma",
  },
];
