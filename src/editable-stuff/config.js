// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dat",
  middleName: "(Danny)",
  lastName: "Le",
  message: " Entrepreneur | Product Manager | Project Manager. ",
  icons: [
    // {
    //   image: "fa-github",
    //   url: "https://github.com/hashirshoaeb",
    // },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/datle0711/",
    },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/datle0711/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/dannyle96",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/dat-le.jpg"),
  imageSize: 375,
  message:
    "I'm Dat Le, an entrepreneurial professional specialized in product development and management, with expertise in Blockchain, IoT, and Digitalization. Passionate about innovation, I bring fresh perspectives to projects. Skilled in overseeing complex initiatives, analyzing trends, and crafting cutting-edge solutions. My dedication lies in leveraging IT technology to drive transformative success for businesses.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Projects",
  message:
    "As an entrepreneur and software development manager, I've led transformative projects, founded successful ventures, and achieved exceptional results. Explore my journey and the impactful solutions I've delivered.",
  images: [
    { 
      img: require("../editable-stuff/dex.jpeg"), 
      label: "Decentralize Exchange", 
      paragraph: "For crypto currency on multichains " 
    },
    { 
      img: require("../editable-stuff/taskon.png"), 
      label: "Engagement platform", 
      paragraph: "Rewarding users for level of engagement" 
    },
    { 
      img: require("../editable-stuff/vTag.webp"), 
      label: "GPS/LTE Tracker ", 
      paragraph: "Connecting to an IoT platform" 
    },
    { 
      img: require("../editable-stuff/real-estate.jpg"), 
      label: "Real Estate analysing platform", 
      paragraph: "Predicting and following theirs price using AI/Bigdata" 
    },
    { 
      img: require("../editable-stuff/dat-le.jpg"), 
      label: "And more", 
      paragraph: "Contact me for more details" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Blockchain", value: 90 },
    { name: "Internet Of Things", value: 80 },
    { name: "E-Commerce", value: 70 },
    { name: "Big Data", value: 70 },
    { name: "Artificial Intelligence", value: 70 },
    { name: "Software development life cycle", value: 70 },
    { name: "Agile Methodology", value: 90 },
    // { name: "JavaScript", value: 90 },
    // { name: "React", value: 65 },
    // { name: "HTML/CSS", value: 55 },
    // { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Leadership", value: 80 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 80 },
    // { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 70 },
    { name: "Vietnamese", value: 100 },
    { name: "English", value: 80 },
    { name: "French", value: 60 },
    { name: "Chinese", value: 50 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Let's chat for great opportunities",
  email: "datlequoc96@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Project Manager / Consultants',// Here Add Company Name
      companylogo: require('../assets/img/vam.png'),
      date: 'Feb 2023 – Present',
    },
    {
      role: 'CEO / Founder',
      companylogo: require('../assets/img/payb-1.png'),
      date: 'May 2021 – Feb 2023',
    },
    {
      role: 'Business Analyst / Project Coordinator',
      companylogo: require('../assets/img/vht.png'),
      date: 'May 2019 – May 2021',
    },
    {
      role: 'Intern Researcher',
      companylogo: require('../assets/img/IRRI.png'),
      date: 'May 2018 – May 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
