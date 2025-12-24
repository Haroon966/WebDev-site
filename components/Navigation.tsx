import { useState, useEffect } from 'react'
import { AnimatedMenu, AnimatedX } from './AnimatedIcons'
import { Home, User, Briefcase, Settings, Workflow, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'services', 'process', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(`#${sections[i]}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          if (scrollPosition >= elementTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#portfolio', label: 'Portfolio', icon: Briefcase },
    { href: '#services', label: 'Services', icon: Settings },
    { href: '#process', label: 'Process', icon: Workflow },
    { href: '#contact', label: 'Contact', icon: Mail },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      data-aos="fade-up"
    >
      <div className="container">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = activeSection === link.href.substring(1)
            return (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-label={link.label}
                >
                  <Icon size={18} className="nav-link-icon" />
                  <span className="nav-link-text">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <AnimatedX size={24} />
          ) : (
            <AnimatedMenu size={24} />
          )}
        </button>
      </div>
    </nav>
  )
}

