'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

export default function Process() {
  const [activeSection, setActiveSection] = useState(0)
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const wrapperRef = useRef<HTMLElement | null>(null)
  const imageWrapperRef = useRef<HTMLDivElement | null>(null)
  const imageMaskRef = useRef<HTMLDivElement | null>(null)

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Data Gathering & Research',
      description:
        'We start by understanding your business, target audience, competitors, and industry trends. This involves comprehensive research, stakeholder interviews, and analysis of your current digital presence to gather all necessary information for informed decision-making.',
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description:
        'Based on the research findings, we develop a strategic plan that outlines the website structure, user journey, technical requirements, and SEO strategy. This phase includes wireframing and creating a detailed project roadmap.',
    },
    {
      number: '03',
      title: 'Designing',
      description:
        'We create visually appealing designs that align with your brand identity while ensuring excellent user experience. This includes creating mockups, UI/UX design, color schemes, typography, and interactive prototypes for client review and feedback.',
    },
    {
      number: '04',
      title: 'Development',
      description:
        'Using modern web technologies and best practices, we transform the designs into a fully functional website. This phase includes frontend development, backend integration, database setup, API implementation, and rigorous testing across multiple browsers and devices.',
    },
    {
      number: '05',
      title: 'SEO Implementation',
      description:
        'We implement comprehensive SEO strategies including meta tags, structured data, semantic HTML, optimized content, sitemap creation, robots.txt configuration, and performance optimization to ensure your website ranks well in search engines.',
    },
    {
      number: '06',
      title: 'Testing & Quality Assurance',
      description:
        'Before launch, we conduct thorough testing including functionality testing, cross-browser compatibility, mobile responsiveness, performance testing, security checks, and accessibility audits to ensure everything works perfectly.',
    },
    {
      number: '07',
      title: 'Hosting & Deployment',
      description:
        'We help you choose the right hosting solution based on your needs, set up the hosting environment, configure domain and SSL certificates, deploy the website, and ensure all systems are properly configured for optimal performance and security.',
    },
    {
      number: '08',
      title: 'Launch & Maintenance',
      description:
        'After a final review and approval, we launch your website and monitor its performance. We provide training documentation, ongoing maintenance support, regular updates, and analytics monitoring to ensure continued success.',
    },
  ]

  // Detect when process section enters/exits viewport
  useEffect(() => {
    if (!wrapperRef.current) return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsSectionVisible(entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    )

    observer.observe(wrapperRef.current)

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current)
      }
    }
  }, [])

  // Scroll spy functionality
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          )
          if (index !== -1) {
            setActiveSection(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // Smooth scroll to section
  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // GSAP ScrollTrigger mask animation for the first section
  useEffect(() => {
    if (!imageWrapperRef.current || !imageMaskRef.current || !sectionRefs.current[0]) return

    const imageWrapper = imageWrapperRef.current
    const imageMask = imageMaskRef.current
    const firstSection = sectionRefs.current[0]
    let imageWidth = 0
    let imageHeight = 0

    const setImageDimensions = () => {
      if (imageWrapper) {
        imageWidth = imageWrapper.offsetWidth
        imageHeight = imageWrapper.offsetHeight
      }
    }
    setImageDimensions()
    window.addEventListener('resize', setImageDimensions)

    const inset = { x: 0, y: 0, r: 50 }
    const snap = gsap.utils.snap(2)

    const videoPinTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: imageWrapper,
          start: 'center center',
          end: '+=500',
          pin: true,
          scrub: true,
        },
      })
      .fromTo(
        inset,
        {
          x: 0,
          y: 0,
          r: 50,
        },
        {
          duration: 1,
          x: 46,
          y: 34,
          r: 140,
          ease: 'power2.out',
          onUpdate() {
            if (imageMask) {
              imageMask.style.clipPath = `inset(${Math.round(
                (inset.x * imageWidth) / 200
              )}px ${Math.round((inset.y * imageHeight) / 200)}px round ${snap(
                inset.r
              )}px)`
            }
          },
        },
        '<'
      )

    return () => {
      window.removeEventListener('resize', setImageDimensions)
      videoPinTl.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === imageWrapper) {
          trigger.kill()
        }
      })
    }
  }, [])

  // Color gradients for each section
  const sectionColors = [
    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
    'linear-gradient(135deg, #f97316 0%, #eab308 100%)',
    'linear-gradient(135deg, #eab308 0%, #22c55e 100%)',
    'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
  ]

  return (
    <section id="process" className="process-wrapper" ref={wrapperRef}>
      <div className="process-container">
        {/* Fixed Navigation Sidebar */}
        <nav
          className={`process-nav ${isSectionVisible ? 'process-nav-fixed' : ''}`}
          id="process-nav"
        >
          <div className="process-nav-header">
            <h2 className="process-nav-heading">Process</h2>
            <div className="process-nav-progress">
              <div 
                className="process-nav-progress-bar" 
                style={{ height: `${((activeSection + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
          <ul className="process-nav-list">
            {steps.map((step, index) => (
              <li
                key={step.number}
                role="presentation"
                className={activeSection === index ? 'active' : ''}
              >
                <a
                  href={`#process-section${index + 1}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(index)
                  }}
                >
                  <div className="process-nav-item-wrapper">
                    <span className="process-nav-counter">{step.number}</span>
                    <div className="process-nav-content">
                      <h3 className="process-nav-title">{step.title}</h3>
                      <p className="process-nav-body">
                        <strong>{step.title}</strong>. {step.description.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                  <div className="process-nav-indicator"></div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Full-height Sections */}
        {steps.map((step, index) => (
          <section
            key={step.number}
            id={`process-section${index + 1}`}
            className={`process-section ${index === 0 ? 'process-section-with-image' : ''}`}
            ref={(el) => {
              sectionRefs.current[index] = el
            }}
            style={{ background: sectionColors[index] }}
          >
            {/* Animated Background Elements */}
            <div className="process-section-bg-pattern"></div>
            <div className="process-section-bg-glow"></div>
            
            {index === 0 && (
              <div className="process-section-image-wrapper" ref={imageWrapperRef}>
                <div className="process-section-image-mask" ref={imageMaskRef}>
                  <Image
                    src="/images/DataGatheringnResearch.jpg"
                    alt="Data Gathering & Research"
                    fill
                    className="process-section-image"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </div>
            )}
            <div className="process-section-content">
              <div className="process-section-number-wrapper">
                <div className="process-section-number">{step.number}</div>
                <div className="process-section-number-glow"></div>
              </div>
              <h2 className="process-section-title">{step.title}</h2>
              <p className="process-section-description">{step.description}</p>
              <div className="process-section-decoration">
                <div className="process-section-line"></div>
                <div className="process-section-dot"></div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

