'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PortfolioItem {
  title: string
  description: string
  tags: string[]
  url?: string
  image?: string
}

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedWebsite, setSelectedWebsite] = useState<PortfolioItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mainIndex, setMainIndex] = useState(0)
  const [galleryOrder, setGalleryOrder] = useState<number[]>([])

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Alfalah Maid Services',
      description: 'Complete website solution for maid services business with booking system and responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      url: 'https://alfalahmaidservices.com',
      image: '/images/alfalahmaidservices.png',
    },
    {
      title: 'Aitemaad Maid Services',
      description: 'Website and booking system for maid services, featuring modern UI/UX design and seamless functionality.',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      url: 'https://aitemaadmaidservices.com',
      image: '/images/aitemaadmaidservices.png',
    },
    {
      title: 'Alfalah Pure Drop',
      description: 'Business website with clean design and optimized for conversions and user engagement.',
      tags: ['Web Design', 'UI/UX', 'Responsive Design'],
      url: 'https://alfalahpuredrop.com',
      image: '/images/alfalahpuredrop.png',
    },
    {
      title: 'Alfalah Patient Care Services',
      description: 'Professional healthcare services website providing patient care solutions with modern design and user-friendly interface.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Healthcare'],
      url: 'https://alfalahpatientcareservices.com/',
      image: '/images/alfalahpatientcareservices.png',
    },
    {
      title: 'Alfalah Handyman Services',
      description: 'Comprehensive handyman services website offering electrical, plumbing, AC repair, and cleaning services with booking system.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Services'],
      url: 'https://alfalahhandymanservices.com/',
      image: '/images/alfalahhandymanservices.png',
    },
    {
      title: 'My Kids Fitness Solutions',
      description: 'Engaging fitness and wellness website for children, featuring interactive design and comprehensive fitness programs tailored for kids.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Fitness'],
      image: '/images/mykidsfitnesssolutions.png',
    },
    {
      title: 'E-Commerce Pet Shop',
      description: 'Django-based eCommerce application for browsing products, shopping cart, and user authentication with admin panel.',
      tags: ['Django', 'Python', 'HTML', 'CSS'],
      url: 'https://pet-shop.example.com',
      image: '/images/ecomerce-petstore.png',
    },
    {
      title: 'Inventory Management System',
      description: 'Lightweight and efficient inventory management system built with modern web technologies for tracking and organizing inventory.',
      tags: ['JavaScript', 'Web Development', 'Productivity'],
      image: '/images/inventorymanagementsystem.png',
    },
  ]

  // Initialize gallery order (all items except the main one)
  useEffect(() => {
    const indices = portfolioItems.map((_, i) => i).filter((i) => i !== 0)
    setGalleryOrder(indices)
  }, [])

  // Simple shuffle helper
  const shuffleArray = (array: number[]) => {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  const handleCardClick = (index: number) => {
    if (index === mainIndex) return

    setMainIndex(index)

    const others = portfolioItems.map((_, i) => i).filter((i) => i !== index)
    setGalleryOrder((prev) => shuffleArray(others))
  }

  // Optional auto shuffle like the HTML example
  useEffect(() => {
    if (portfolioItems.length <= 1) return

    const interval = setInterval(() => {
      setMainIndex((currentMain) => {
        const otherIndices = portfolioItems.map((_, i) => i).filter((i) => i !== currentMain)
        const randomIndex = otherIndices[Math.floor(Math.random() * otherIndices.length)]
        const others = portfolioItems.map((_, i) => i).filter((i) => i !== randomIndex)
        setGalleryOrder(shuffleArray(others))
        return randomIndex
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const getImageUrl = (item: PortfolioItem, large = false) => {
    if (item.image) {
      return item.image
    }
    // Fallback to placeholder gradient if no image
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzhiNWNmNiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2VjNDg5OSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+'
  }

  const openModal = (item: PortfolioItem, e: React.MouseEvent) => {
    if (!item.url) return
    e.stopPropagation()
    setSelectedWebsite(item)
    setIsModalOpen(true)
    setIsLoading(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedWebsite(null)
    setIsLoading(true)
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
        setSelectedWebsite(null)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Split gallery order into right column (top) and bottom row
  const rightColumnIndices = galleryOrder.slice(0, 3)
  const bottomRowIndices = galleryOrder.slice(3)

  return (
    <section
      id="portfolio"
      className="portfolio"
      aria-label="Portfolio projects"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">Showcasing my latest web development projects</p>
        </div>
        <div className="portfolio-layout">
          {/* Large main card (top-left) */}
          <div className="portfolio-main" aria-label="Featured project">
            {portfolioItems[mainIndex] && (
              <article
                className="portfolio-card portfolio-card-main main-glow shuffle-enter-active"
                onClick={() => handleCardClick(mainIndex)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCardClick(mainIndex)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Featured project: ${portfolioItems[mainIndex].title}. Click to view details.`}
              >
                <div className="portfolio-card-image">
                  {portfolioItems[mainIndex].image ? (
                    <Image
                      src={getImageUrl(portfolioItems[mainIndex], true)}
                      alt={`${portfolioItems[mainIndex].title} - Featured project preview`}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                      priority
                    />
                  ) : (
                    <img
                      src={getImageUrl(portfolioItems[mainIndex], true)}
                      alt={`${portfolioItems[mainIndex].title} - Featured project preview`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  )}
                </div>
                <div className="portfolio-card-content">
                  <div className="portfolio-badge">Featured</div>
                  <h3>{portfolioItems[mainIndex].title}</h3>
                  <p>{portfolioItems[mainIndex].description}</p>
                  <div className="portfolio-tags" role="list" aria-label="Technologies used">
                    {portfolioItems[mainIndex].tags.map((tag) => (
                      <span key={tag} role="listitem">{tag}</span>
                    ))}
                  </div>
                  {portfolioItems[mainIndex].url && (
                    <button
                      className="btn btn-primary btn-view"
                      onClick={(e) => openModal(portfolioItems[mainIndex], e)}
                      aria-label={`View ${portfolioItems[mainIndex].title} website`}
                    >
                      View Website
                    </button>
                  )}
                </div>
              </article>
            )}
          </div>

          {/* Right column: 3 stacked image-only cards (top-right) */}
          <div
            className="portfolio-right"
            aria-label="Project gallery right column"
          >
            {rightColumnIndices.map((index) => {
              const item = portfolioItems[index]
              return (
                  <article
                    key={`${item.title}-right-${index}`}
                    className="portfolio-card shuffle-enter-active"
                    data-aos="fade-left"
                  onClick={() => handleCardClick(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleCardClick(index)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${item.title}. Click to feature this project.`}
                >
                  <div className="portfolio-card-image">
                    {item.image ? (
                      <Image
                        src={getImageUrl(item)}
                        alt={`${item.title} project preview`}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 300px"
                      />
                    ) : (
                      <img
                        src={getImageUrl(item)}
                        alt={`${item.title} project preview`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        loading="lazy"
                      />
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          {/* Bottom row: 4+ image-only cards spanning full width under main */}
          <div className="portfolio-bottom" aria-label="Project gallery bottom row">
            {bottomRowIndices.map((index) => {
              const item = portfolioItems[index]
              return (
                <article
                  key={`${item.title}-bottom-${index}`}
                  className="portfolio-card shuffle-enter-active"
                  onClick={() => handleCardClick(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleCardClick(index)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${item.title}. Click to feature this project.`}
                >
                  <div className="portfolio-card-image">
                    {item.image ? (
                      <Image
                        src={getImageUrl(item)}
                        alt={`${item.title} project preview`}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 300px"
                      />
                    ) : (
                      <img
                        src={getImageUrl(item)}
                        alt={`${item.title} project preview`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        loading="lazy"
                      />
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedWebsite && selectedWebsite.url && (
        <div className="website-modal-overlay" onClick={closeModal}>
          <div className="website-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>{selectedWebsite.title}</h2>
            </div>
            <div className="modal-content">
              {isLoading && (
                <div className="iframe-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading website...</p>
                </div>
              )}
              <iframe
                src={selectedWebsite.url}
                title={selectedWebsite.title}
                className="website-iframe"
                allowFullScreen
                onLoad={handleIframeLoad}
                style={{ opacity: isLoading ? 0 : 1 }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

