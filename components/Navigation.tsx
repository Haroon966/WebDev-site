import { useState, useEffect } from 'react'
import { Home, User, Briefcase, Mail } from 'lucide-react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0)

  const navItems = [
    { icon: Home, href: '#home', label: 'Home' },
    { icon: User, href: '#about', label: 'About' },
    { icon: Briefcase, href: '#portfolio', label: 'Portfolio' },
    { icon: Mail, href: '#contact', label: 'Contact' },
  ]

  const handleClick = (index: number, href: string) => {
    setActiveIndex(index)
    if (href) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Update active index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement
        if (section && section.offsetTop <= scrollPosition) {
          setActiveIndex(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = index === activeIndex
          
          return (
            <button
              key={index}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={() => handleClick(index, item.href)}
              aria-label={item.label}
            >
              <div className={styles.iconWrapper}>
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={styles.label}>{item.label}</span>
              {isActive && <div className={styles.activeIndicator} />}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
