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
    recordingLink: "https://www.youtube.com/watch?v=l9PMuyODbtU",
  },
  {
    title: "Asynchronous TypeScript and API Basics",
    slidesLink:
      "https://docs.google.com/presentation/d/1sm-f4ezR-QvKKy1deePRGL4PqjuXsjyLf0SasyJ_yQ8/edit?usp=sharing",
    lectureCodeLink:
      "https://github.com/Codify-Berkeley-Education/Lecture-4-Starter",
    recordingLink: "https://www.youtube.com/watch?v=Vrf3pivW510",
  },
  {
    title: "Relational Data Modeling With Prisma",
    slidesLink:
      "https://docs.google.com/presentation/d/1AXPjYCqvqPdOl6n2udFTwS_GPLVdlzIy1YbBAt4Ep-k/edit?usp=sharing",
    lectureCodeLink:
      "https://github.com/Codify-Berkeley-Education/Lecture-5-Starter",
    recordingLink: "https://www.youtube.com/watch?v=sqNBvx583lw",
  },
  {
    title: "Prisma Client and CRUD Operations",
    slidesLink:
      "https://docs.google.com/presentation/d/1sADuY8orga_a0q9AULlNgq2ntmkDoqc48yCoSt3uMk4/edit?usp=sharing",
    lectureCodeLink:
      "https://github.com/Codify-Berkeley-Education/Lecture-6-Starter",
    recordingLink: "https://www.youtube.com/watch?v=Gvasj9MoIe4",
  },
];
