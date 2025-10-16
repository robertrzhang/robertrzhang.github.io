function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A web application built with React and TypeScript",
      tech: ["React", "TypeScript", "CSS"]
    },
    {
      title: "Project Two", 
      description: "Full-stack application with modern technologies",
      tech: ["Node.js", "Express", "MongoDB"]
    }
  ]

  return (
    <section className="section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
