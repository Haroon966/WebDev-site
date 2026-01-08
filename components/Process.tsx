'use client'

import React, { useState, useRef, useEffect } from 'react'

interface ProcessStep {
  number: string
  title: string
  description: string
}

export default function Process() {
  const [steps, setSteps] = useState<ProcessStep[]>([
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
  ])

  const [positions, setPositions] = useState<{ x: number; y: number }[]>([])
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Color gradients for each card - using theme colors with variations
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

  // Initialize positions with default grid layout - 4 cards per row, evenly spread
  useEffect(() => {
    if (!containerRef.current) return
    
    // Default grid layout with 4 columns, evenly spread
    const cols = 4
    const cardWidth = 280
    const cardHeight = 200
    const padding = 16
    
    // Calculate available width (container width minus padding on both sides)
    const containerWidth = containerRef.current.offsetWidth || 1400
    const availableWidth = containerWidth - (padding * 2)
    
    // Calculate total width needed for 4 cards
    const totalCardsWidth = cols * cardWidth
    const totalGap = availableWidth - totalCardsWidth
    const gapBetweenCards = totalGap / (cols - 1)
    
    const defaultPositions = steps.map((_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols
      const rowGap = 40
      
      return {
        x: padding + col * (cardWidth + gapBetweenCards),
        y: padding + row * (cardHeight + rowGap),
      }
    })
    setPositions(defaultPositions)
  }, [])

  // Force re-render to update lines when positions change
  useEffect(() => {
    // This will trigger a re-render to update line positions
  }, [positions])

  // Global mouse event listeners for smooth dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && draggedIndex !== null && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const card = cardRefs.current[draggedIndex]
        
        if (card) {
          const cardWidth = card.offsetWidth
          const cardHeight = card.offsetHeight
          
          // Calculate position relative to container (without scroll)
          const newX = e.clientX - containerRect.left - offset.x
          const newY = e.clientY - containerRect.top - offset.y

          // Clamp to visible container bounds (no scrolling)
          const padding = 16 // 1rem padding
          const minX = padding
          const minY = padding
          const maxX = containerRect.width - cardWidth - padding
          const maxY = containerRect.height - cardHeight - padding

          const clampedX = Math.max(minX, Math.min(maxX, newX))
          const clampedY = Math.max(minY, Math.min(maxY, newY))

          const newPositions = [...positions]
          newPositions[draggedIndex] = { x: clampedX, y: clampedY }
          setPositions(newPositions)
        }
      }
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
      setDraggedIndex(null)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove)
        document.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isDragging, draggedIndex, offset, positions])

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    setIsDragging(true)
    setDraggedIndex(index)
    const rect = cardRefs.current[index]?.getBoundingClientRect()
    if (rect) {
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
    e.preventDefault()
  }

  return (
    <section id="process" className="process-wrapper">
      <div 
        ref={containerRef} 
        className="process-container"
      >
        {/* Connecting Lines */}
        <svg
          className="process-lines-container"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <defs>
            <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.8)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {steps.map((_, index) => {
            if (index >= steps.length - 1) return null
            const position = positions[index] || { x: 0, y: 0 }
            const nextPosition = positions[index + 1] || { x: 0, y: 0 }
            const cardHeight = cardRefs.current[index]?.offsetHeight || 200
            const nextCardHeight = cardRefs.current[index + 1]?.offsetHeight || 200
            
            return (
              <React.Fragment key={`lines-${index}`}>
                <line
                  x1={position.x + 140}
                  y1={position.y + cardHeight / 2}
                  x2={nextPosition.x + 140}
                  y2={nextPosition.y + nextCardHeight / 2}
                  stroke="rgba(99, 102, 241, 0.4)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="process-line-path"
                />
                {/* Flowing wire effect */}
                <line
                  x1={position.x + 140}
                  y1={position.y + cardHeight / 2}
                  x2={nextPosition.x + 140}
                  y2={nextPosition.y + nextCardHeight / 2}
                  stroke="url(#flowingGradient)"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  className="process-line-flow"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              </React.Fragment>
            )
          })}
        </svg>
        
        {steps.map((step, index) => {
          const position = positions[index] || { x: 0, y: 0 }
          
          return (
            <div
              key={`${step.number}-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              onMouseDown={(e) => handleMouseDown(e, index)}
              className={`process-card ${draggedIndex === index ? 'dragging' : ''}`}
              style={{ 
                background: sectionColors[index],
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging && draggedIndex === index ? 'grabbing' : 'grab',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="process-card-background"></div>
              <div className="process-card-glow"></div>
              <div className="process-card-shine"></div>
              <div className="process-card-content">
                <div className="process-card-number">{step.number}</div>
                <h2 className="process-card-title">{step.title}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
