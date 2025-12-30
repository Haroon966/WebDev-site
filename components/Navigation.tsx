import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Home, User, Briefcase, Mail } from 'lucide-react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const navbarContainerRef = useRef<HTMLDivElement>(null)
  const bgBubbleRef = useRef<HTMLDivElement>(null)
  const bubblesRef = useRef<(HTMLDivElement | null)[]>([])
  const iconsRef = useRef<(HTMLSpanElement | null)[]>([])
  const menuIconsRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const navItems = [
    { id: '1', position: '12.5%', color: '#ffcc80', icon: Home, href: '#home', label: 'Home' },
    { id: '2', position: '37.5%', color: '#81d4fa', icon: User, href: '#about', label: 'About' },
    { id: '3', position: '62.5%', color: '#c5e1a5', icon: Briefcase, href: '#portfolio', label: 'Portfolio' },
    { id: '4', position: '87.5%', color: '#ce93d8', icon: Mail, href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    // Initialize first bubble as active
    if (bubblesRef.current[0] && iconsRef.current[0]) {
      gsap.set(bubblesRef.current[0], { y: '0%', opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' })
      gsap.set(iconsRef.current[0], { opacity: 0.7 })
    }
    // Hide first menu icon initially
    if (menuIconsRef.current[0]) {
      gsap.set(menuIconsRef.current[0], { opacity: 0 })
    }
  }, [])

  const move = (id: string, position: string, color: string, href: string) => {
    const bubbleIndex = parseInt(id) - 1
    const tl = gsap.timeline()

    // Scroll to section
    if (href) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const bgElement = navbarContainerRef.current?.querySelector(`.${styles.bg}`) as HTMLElement

    // Show previously active menu icon
    if (menuIconsRef.current[activeIndex]) {
      gsap.to(menuIconsRef.current[activeIndex], { duration: 0.2, opacity: 0.4, ease: 'ease-out' })
    }

    tl.to(bgBubbleRef.current, { duration: 0.15, bottom: '-30px', ease: 'ease-out' }, 0)
      .to(bubblesRef.current[0], { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to(bubblesRef.current[1], { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to(bubblesRef.current[2], { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to(bubblesRef.current[3], { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to(iconsRef.current, { duration: 0.05, opacity: 0, ease: 'ease-out' }, 0)
      .to(bgBubbleRef.current, { duration: 0.2, left: position, ease: 'ease-in-out' }, 0.1)
      .to(bgBubbleRef.current, { duration: 0.15, bottom: '-50px', ease: 'ease-out' }, '-=0.2')
      .to(bubblesRef.current[bubbleIndex], { duration: 0.15, y: '0%', opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', ease: 'ease-out' }, '-=0.1')
      .to(iconsRef.current[bubbleIndex], { duration: 0.15, y: '0%', opacity: 0.7, ease: 'ease-out' }, '-=0.1')
      .to(navbarContainerRef.current, { duration: 0.3, backgroundColor: color, ease: 'ease-in-out' }, 0)
      .to(bgElement, { duration: 0.3, backgroundColor: color, ease: 'ease-in-out' }, 0)
      .to(bgBubbleRef.current, { duration: 0.3, backgroundColor: color, ease: 'ease-in-out' }, 0)
      .to(menuIconsRef.current[bubbleIndex], { duration: 0.2, opacity: 0, ease: 'ease-out' }, '-=0.1')

    setActiveIndex(bubbleIndex)
  }

  return (
    <>
      <div className={styles.navbarContainer} ref={navbarContainerRef}>
        <div className={styles.navbar}>
          <div className={styles.bubbleWrapper}>
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className={`${styles.bubble} ${index === 0 ? styles.bubbleActive : ''}`}
                  ref={(el) => {
                    bubblesRef.current[index] = el
                  }}
                >
                  <span className={`${styles.icon} ${index === 0 ? styles.iconActive : ''}`} ref={(el) => {
                    iconsRef.current[index] = el
                  }}>
                    <Icon size={20} />
                  </span>
                </div>
              )
            })}
          </div>
          <div className={styles.menuWrapper}>
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className={styles.menuElement}
                  onClick={() => move(item.id, item.position, item.color, item.href)}
                >
                  <div ref={(el) => {
                    menuIconsRef.current[index] = el
                  }}>
                    <Icon size={20} />
                  </div>
                  <span className={styles.menuText}>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.bgWrapper}>
          <div className={styles.bg}></div>
          <div className={styles.bgBubble} ref={bgBubbleRef}></div>
        </div>
      </div>

      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
