'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface WebsiteData {
  name: string
  description: string
  url: string
  image?: string
}

export default function Hero() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const websites: WebsiteData[] = [
    { 
      name: 'Alfalah Maid Services', 
      description: 'Complete website solution for maid services business with booking system and responsive design.', 
      url: 'https://alfalahmaidservices.com',
      image: '/images/alfalahmaidservices.png'
    },
    { 
      name: 'Aitemaad Maid Services', 
      description: 'Website and booking system for maid services, featuring modern UI/UX design and seamless functionality.', 
      url: 'https://aitemaadmaidservices.com',
      image: '/images/aitemaadmaidservices.png'
    },
    { 
      name: 'Alfalah Pure Drop', 
      description: 'Business website with clean design and optimized for conversions and user engagement.', 
      url: 'https://alfalahpuredrop.com',
      image: '/images/alfalahpuredrop.png'
    },
    { 
      name: 'Alfalah Patient Care Services', 
      description: 'Professional healthcare services website providing patient care solutions with modern design and user-friendly interface.', 
      url: 'https://alfalahpatientcareservices.com/',
      image: '/images/alfalahpatientcareservices.png'
    },
    { 
      name: 'Alfalah Handyman Services', 
      description: 'Comprehensive handyman services website offering electrical, plumbing, AC repair, and cleaning services with booking system.', 
      url: 'https://alfalahhandymanservices.com/',
      image: '/images/alfalahhandymanservices.png'
    },
    { 
      name: 'My Kids Fitness Solutions', 
      description: 'Engaging fitness and wellness website for children, featuring interactive design and comprehensive fitness programs tailored for kids.', 
      url: 'https://mykidsfitnesssolutions.com/',
      image: '/images/mykidsfitnesssolutions.png'
    },
    { 
      name: 'E-Commerce Pet Shop', 
      description: 'Django-based eCommerce application for browsing products, shopping cart, and user authentication with admin panel.', 
      url: 'https://pet-shop.example.com',
      image: '/images/ecomerce-petstore.png'
    },
  ]

  const totalCards = websites.length

  const updateCarousel = (newIndex: number) => {
    setCurrentCardIndex(newIndex)
  }

  const nextCard = () => {
    const newIndex = (currentCardIndex + 1) % totalCards
    updateCarousel(newIndex)
  }

  const prevCard = () => {
    const newIndex = (currentCardIndex - 1 + totalCards) % totalCards
    updateCarousel(newIndex)
  }

  const goToCard = (index: number) => {
    updateCarousel(index)
  }

  const openModal = (website: WebsiteData, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedWebsite(website)
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

  const getCardClass = (index: number) => {
    if (index === currentCardIndex) {
      return 'hero-card active'
    }
    
    // Calculate forward distance
    const forwardDiff = (index - currentCardIndex + totalCards) % totalCards
    // Calculate backward distance
    const backwardDiff = (currentCardIndex - index + totalCards) % totalCards
    
    // Use the shorter distance
    if (forwardDiff <= backwardDiff) {
      if (forwardDiff === 1) return 'hero-card next-1'
      if (forwardDiff === 2) return 'hero-card next-2'
      if (forwardDiff === 3) return 'hero-card next-3'
    } else {
      if (backwardDiff === 1) return 'hero-card prev-1'
      if (backwardDiff === 2) return 'hero-card prev-2'
      if (backwardDiff === 3) return 'hero-card prev-3'
    }
    
    return 'hero-card'
  }

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards)
    }, 3000) // Rotate every 3 seconds

    return () => clearInterval(interval)
  }, [totalCards])

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

  return (
    <section id="home" className="hero" data-aos="fade-up">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Crafting Digital <span className="highlight">Experiences</span> That Matter
          </h1>
          <p className="hero-description">
            A leading web development agency specializing in creating beautiful, functional, and user-centered digital solutions for businesses.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">View Our Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-carousel">
          <div className="we-card-container">
            {websites.map((website, index) => (
              <div key={index} className={getCardClass(index)} onClick={() => goToCard(index)}>
                <div className="hero-card-content">
                  {website.image ? (
                    <div className="hero-card-image">
                      <Image
                        src={website.image}
                        alt={website.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 200px, 300px"
                      />
                    </div>
                  ) : (
                    <div className="hero-card-placeholder">
                      <h3>{website.name}</h3>
                    </div>
                  )}
                </div>
                <div className="hero-card-overlay">
                  <div className="hero-card-overlay-content">
                    <h3>{website.name}</h3>
                    <button 
                      className="btn btn-primary btn-view"
                      onClick={(e) => openModal(website, e)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedWebsite && (
        <div className="website-modal-overlay" onClick={closeModal}>
          <div className="website-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>{selectedWebsite.name}</h2>
              <p className="modal-description">{selectedWebsite.description}</p>
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
                title={selectedWebsite.name}
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

