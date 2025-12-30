import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "../ScrollAnimation"
import { NavHashLink } from "react-router-hash-link"

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Robert Zhang</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Exploring the intersection of technology, medicine, and teaching</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#about" className="button">About</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/robertrzhang"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/robertrzhang"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="mailto:robertrzhang@berkeley.edu"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <div className="image-collage">
          <div className="collage-item">
            <img src="/oscilloscope.jpeg" alt="Amazon Connect" />
          </div>
          <div className="collage-item">
            <img src="/ucsf-weill.png" alt="UCSF Weill Institute" />
          </div>
          <div className="collage-item">
            <img src="/berkeley-neuroscience.png" alt="Berkeley Neuroscience" />
          </div>
          <div className="collage-item">
            <img src="/pokemon.jpg" alt="Pokemon" />
          </div>
          <div className="collage-item">
            <img src="/glowing-ball.jpeg" alt="Glowing Ball" />
          </div>
          <div className="collage-item">
            <img src="/microscope-image.jpeg" alt="Microscope" />
          </div>
          <div className="collage-item">
            <img src="/vikings.png" alt="MN Vikings" />
          </div>
          <div className="collage-item">
            <img src="/campanile.jpeg" alt="Amazon Connect" />
          </div>
          <div className="collage-item">
            <img src="/amazon-connect.png" alt="Amazon Connect" />
          </div>
          <div className="collage-item">
            <img src="/berkeley-seal.svg" alt="UC Berkeley" />
          </div>
        </div>
      </div>
    </Container>
  )
}
