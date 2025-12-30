import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'

export function Header() {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    // Set light mode as default on initial load
    const body = document.getElementsByTagName('body')[0]
    body.classList.add('light-mode')
  }, [])

  function toggleTheme() {
    let body = document.getElementsByTagName('body')[0]
    body.classList.toggle('light-mode')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Robert "}</span>
          <span>{" Zhang/>"}</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
          defaultChecked={true}
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Projects
          </NavHashLink>
          <a 
            href="/robertrzhang-resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="button"
          >
            Resume
          </a>
          {/* <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink> */}
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
