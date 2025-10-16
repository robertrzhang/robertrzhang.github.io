import { useState } from 'react'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Robert Zhang</h1>
          <ul className="nav-links">
            <li>
              <button 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setActiveSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setActiveSection('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setActiveSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        {renderSection()}
      </main>
    </div>
  )
}

// export default App
//               challenging projects.
//             </p>
//           </section>
//         )}

//         {activeSection === 'projects' && (
//           <section className="section">
//             <h2>My Projects</h2>
//             <div className="projects-grid">
//               {projects.map((project, index) => (
//                 <div key={index} className="project-card">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                   <div className="tech-stack">
//                     {project.tech.map((tech, techIndex) => (
//                       <span key={techIndex} className="tech-tag">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {activeSection === 'contact' && (
//           <section className="section">
//             <h2>Get In Touch</h2>
//             <div className="contact-info">
//               <p>📧 robert@example.com</p>
//               <p>💼 LinkedIn: /in/robertzhang</p>
//               <p>🐙 GitHub: @robertrzhang</p>
//             </div>
//           </section>
//         )}
//       </main>
//     </div>
//   )
// }

export default App
