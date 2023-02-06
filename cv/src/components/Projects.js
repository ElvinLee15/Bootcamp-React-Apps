// Projects Component linking to some of the projects completed on the boot camp

// Individual project components
const Project = (props) => {
  return (
    <section className="projectContainer">
      <h3>{props.projectName}</h3>
      <p>{props.projectDescription}</p>
      <a href={props.projectLink}>Link to Project</a>
    </section>
  );
};

// Display each project under a header
const Projects = (props) => {
  return (
    <section className="projectsContainer">
      <Project
        projectName={props.projectName}
        projectDescription={props.projectDescription}
        projectLink={props.projectLink}
      />
    </section>
  );
};

export default Projects
