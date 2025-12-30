import { Container } from "./Projects.styles";
import ScrollAnimation from "./ScrollAnimation";

export function Projects() {
  const projects = [
    {
      title: "Time Locking Device",
      description: "Time-locking device for reliable electrophysiology readings from Responsive Neurostimulation tools.",
      tech: ["C++", "Python", "Arduino", "ESP32"],
      github: "https://github.com/robertrzhang/knight-time-locking",
      link: "#"
    },
    {
      title: "Neuron Segmentation", 
      description: "Improved and optimized neuron segmentation model. Code is confidential, but linked presentation.",
      tech: ["AWS", "Python", "Tensorflow"],
      github: "https://docs.google.com/presentation/d/1Ozo7FeFfhQUeotbIEtET5AHmWnefDmbsMC62bVlDGbc/edit?usp=sharing",
      link: "#"
    },
    {
      title: "Pintos Operating System", 
      description: "Optimized user processes, threading, and fast file system operations for the UNIX-based PintOS kernel.",
      tech: ["C", "Assembly"],
      github: "https://github.com/robertrzhang",
      link: "#"
    }
  ]

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              <div className="project">
                <header>
                  <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </header>
                <div className="body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    {project.tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </a>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  )
}

export default Projects
