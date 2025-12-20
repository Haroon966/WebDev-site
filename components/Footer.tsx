export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Haroon Ali</h3>
            <p>
              Web Developer & UI/UX Designer from Pakistan. Creating exceptional digital experiences through modern web development.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, '#home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, '#about')}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleScroll(e, '#portfolio')}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScroll(e, '#services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleScroll(e, '#process')}>
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>SEO Optimization</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a 
                href="https://github.com/Haroon966" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="https://instagram.com/haroon.1920" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Web Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

