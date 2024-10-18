export const aboutData = {
  metaDescription:
    "Welcome to Raj Verma's Portfolio! I am a passionate Front-end Developer with a strong focus on Designing simple yet effective website. Explore my diverse projects and works that showcase my skills in reactjs, tailwind css amd figma. I believe in creativity, innovation, and user-centric design. Let's connect and collaborate on exciting projects.",

  quote: "Passion Fuels Purpose!",

  bio: [
    "Hi, I'm Raj Verma, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to bring my clients' visions to life.",
    "I believe that design is about more than just making things look pretty, it's about solving problems and creating intuitive, enjoyable experiences for users.",
    "Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.",
  ],

  satisfiedClients: 3,
  projectsCompleted: 4,
  yearsOfExperience: 0,

  workDetails: [
    {
      position: "Sr. It Executive",
      company: "3T Logistics",
      link: "https://3tl.in",
      time: "June' 24-Present",
      address: "Rajiv Nagar Sector 13, 122001 India",
      work: "Build several custom solutions, worked with seo and development team",
    },

    {
      position: "Frontend-developer | Intern",
      company: "webmistry",
      link: "https://askwebmistry.com",
      time: "June' 23 - July' 23",
      address: "Krishna Colony Palwal, 121102 India",
      work: "Work as a junior Front-end developer and help the company to convert their designs into code, worked under a creative team and enhance their design by my design thinking and effective implementations completely Designed and developed their landing page in a user centric way.",
    },
  ],

  educationDetails: [
    {
      type: "Masters Of Computer Applications",
      time: "2024 - Present",
      place: "Amity Online University",
      info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, Web Technologies.",
    },

    {
      type: "Bachelors Of Computer Applications",
      time: "2021 - 2024",
      place: "70A, Delhi-Jaipur Expy, Block A, Sector 34, Gurugram, Haryana",
      info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, Web Technologies.",
    },

    {
      type: "Intermediate",
      grade: "90%", //passing this grade here is totaly optional
      time: "2021",
      place: "Bhim Nagar 122001, Gurugram, Haryana",
      info: "Basic Subjecs like Maths, Commerce, Accounts",
    },
  ],
};

export const projectsData = [
  {
    title: "Airbnb",
    summary:
      "The platform allows users to search for and book properties, similar to Airbnb, with features like property listings, user authentication, comments and ratings",
    link: "https://airbnb-3m2g.onrender.com/listings",
    images: [
      require("./images/projects/airbnb/img1.png").default,
      require("./images/projects/airbnb/img2.png").default,
      require("./images/projects/airbnb/img3.png").default,
    ],
    githubLink: "https://github.com/iammrverma/Airbnb",
    skills: ["Mongo Db", "Node Js", "Express Js"],
  },
  {
    title: "Insights On Accounts",
    summary:
      "Full-stack web application with role-based access control, designed to streamline operations for the accounts team, finance team, and CFO. Implemented separate interfaces for each department to manage daily entries, while providing the CFO with a consolidated, analytical dashboard to generate custom insights from departmental data.",
    images: [
      require("./images/projects/ioa/img1.png").default,
      require("./images/projects/ioa/img2.png").default,
    ],
    githubLink: "https://github.com/iammrverma/demoMatched",
    skills: ["Sql", "Node Js", "Express Js", "Bootstrap"],
  },
  {
    title: "Task Manager",
    summary:
      "TaskTracker is a simple and intuitive task manager application built using HTML, CSS, JavaScript, React, and Bootstrap. It allows users to easily add, manage, and track their tasks in a hassle-free manner.",
    link: "https://iammrverma-tasktracker.netlify.app/",
    images: [
      require("./images/projects/taskmanager/img1.png").default,
      require("./images/projects/taskmanager/img2.png").default,
      require("./images/projects/taskmanager/img3.png").default,
    ],
    githubLink: "https://github.com/iammrverma/Task-Tracker",
    skills: ["React Js", "Html", "Css"],
  },
  {
    title: "Python library",
    summary:
      "Worked in python library which focus on a custom graph called Petersen this library fall under graph libraries of python which is under development yet.",
    images: [
      require("./images/projects/petersen/img1.png").default,
      require("./images/projects/petersen/img2.png").default,
      require("./images/projects/petersen/img3.png").default,
      require("./images/projects/petersen/img4.png").default,
    ],
    githubLink: "https://github.com/iammrverma/Petersen",
    skills: ["Python", "Matplotlib", "Networkx"],
  },
];
