import "./App.css";

// Component Imports
import Profile from "./components/Profile";
import Skills from "./components/TechnicalSkills";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Achievements from "./components/Achievements";

// Image Imports
import profilePic from "./images/profilePic.jpg";

// Profile Object
const profileObj = {
  profilePic: profilePic,
  address: "Arnold, Nottingham, Nottinghamshire, NG5 7GA",
  email: "elvinlee15hotmail.com",
  mobileNumber: "+44 07810 563384",
  drivingLicense: "Full/Clean UK Driving License",
  linkedIn: "https://www.linkedin.com/in/elvin-chung-jing-lee/",
  gitHub: "https://github.com/ElvinLee15",
};

// Skills Lists
const programingLanguagesList = [
  "Javascript",
  "HTML",
  "CSS",
  "Node.js",
  "React.js",
  "VSCode",
  "MATLAB",
  "gPROMS",
];
const extraSkillsList = [
  "Microsoft Office (Word, Excel and Powerpoint)",
  "Aspen",
  "Aspen HYSIS",
  "Fluent",
  "SolidWorks",
  "AutoCAD Plant 3D",
];

const programmingLanguagesAttributes = programingLanguagesList.map((ele) => {
  return <Skills skill={ele} />;
});

// Programming Languages Section
const programingLanguages = (
  <section className="programmingLanguagesContainer">
    <h2>Programming Languages:</h2>
    <ul>{programmingLanguagesAttributes}</ul>
  </section>
);

const extraSkillsAttributes = extraSkillsList.map((ele) => {
  return <Skills skill={ele} />;
});

// Programming Languages Section
const extraSkills = (
  <section className="programmingLanguagesContainer">
    <h2>Extra Skills:</h2>
    <ul>{extraSkillsAttributes}</ul>
  </section>
);

// About text
const aboutText =
  "Motivated Web Development Student currently looking for a position in Web development. I am currently enrolled on a Web Development Bootcamp, focusing mainly on front-end development with Javascript, CSS, HTML and React.js. I am eager to expand on learning other languages like Python which is essential for machine learning and management of data, to provide more tools in my future Programming Career.";

// Education Heading Element
const educationHeading = <h2>Education:</h2>;

// Education Objects List
const educationObjList = [];

class EducationObj {
  constructor(qualification, detail) {
    this.qualification = qualification;
    this.detail = detail;

    educationObjList.push(this);
  }
}

new EducationObj(
  "Hyperion Dev- Web Development Bootcamp (Currently Enrolled)",
  "Nov 2022 - Feb 2023"
);
new EducationObj(
  "University of Bradford- MEng Chemical Engineering (1st Class)",
  "2015-2019"
);

new EducationObj("A Levels (Arnold Hill Academy)", "Maths B, Chemistry C, Physics C");

new EducationObj(
  "GCSE A Levels (Arnold Hill Academy)",
  "13 Subjects (3A*,4A, 5B, 1C) including Mathematics, English and Separate Sciences"
);

const educationAttributes = educationObjList.map((ele) => {
  return <Education qualification={ele.qualification} detail={ele.detail} />;
});

// Achievements Text
let DofE =
  "- Bronze and Silver Duke of Edinburgh Award- Time management was essential to complete the activities while completing GCSEs and A levels to attain the award. This included doing volunteer work at an Oxfam store and a Scout campsite.";
let Awards =
  "- Awarded student of the year and two times endeavour awards in secondary school. Teachers and peers often saw me as a quiet hardworking person.";

// Achievements section
const achievementsAttributes = (
  <section className="achievementsContainer">
    <h2>Achievements</h2>
    <Achievements achievement={DofE} />
    <Achievements achievement={Awards} />
  </section>
);

// Hobbies Heading Element
const projectsHeading = <h2>Projects:</h2>;

// Projects Objects List
const projectObjList = [];

class projectObj {
  constructor(projectName, projectDescription, projectLink) {
    this.projectName = projectName;
    this.projectDescription = projectDescription;
    this.projectLink = projectLink;

    projectObjList.push(this);
  }
}

new projectObj(
  "Design webpages based on a hobby (HyperionDev)",
  "The task was to produce webpages based on a hobby in which Baking was selected. Recipe pages were produced to allow users to follow and provide feedback on the recipe. A feature to allow the user to save recipes was also required. The current project is currently completed for the task, but I intend on further developing it for personal use after finishing the Bootcamp gradually.",
  "https://github.com/ElvinLee15/Baking-Web-Page-Development"
);

const projectAttributes = projectObjList.map((ele) => {
  return (
    <Projects
      projectName={ele.projectName}
      projectDescription={ele.projectDescription}
      projectLink={ele.projectLink}
    />
  );
});

// Hobbies Heading Element
const hobbiesHeading = <h2>Hobbies and Interests:</h2>;

// Hobbies and Interests Objects List
const hobbiesObjList = [];

class HobbiesObj {
  constructor(hobbyDetail) {
    this.hobbyDetail = hobbyDetail;

    hobbiesObjList.push(this);
  }
}

new HobbiesObj(
  "- I am interested in model kit building (Gunpla) and Custom PC building. I enjoy the challenge of building something from scratch, which also often occurs in programming."
);

new HobbiesObj(
  "- Violin Player at Nottingham Music School’s Concert Orchestra (2007-2011)- Experience involved fundraising performances and interactions with international orchestras from Germany and France."
);

const hobbiesAttributes = hobbiesObjList.map((ele) => {
  return <Hobbies hobbyDetail={ele.hobbyDetail} />;
});

function App() {
  return (
    <div className="appContainer">
      <Profile
        profilePic={profileObj.profilePic}
        address={profileObj.address}
        email={profileObj.email}
        mobileNumber={profileObj.mobileNumber}
        drivingLicense={profileObj.drivingLicense}
        linkedIn={profileObj.linkedIn}
        gitHub={profileObj.gitHub}
      />

      <div className="skillsContainer">
        {programingLanguages}
        {extraSkills}
      </div>

      <div className="cvContentContainer">
        <About about={aboutText} />
        <hr></hr>
        {educationHeading}
        {educationAttributes}
        <hr></hr>
        {projectsHeading}
        {projectAttributes}
        <hr></hr>
        {achievementsAttributes}
        <hr></hr>
        {hobbiesHeading}
        {hobbiesAttributes}
      </div>
    </div>
  );
}

export default App;
