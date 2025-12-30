import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App

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

