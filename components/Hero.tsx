'use client'

import { useState } from 'react'

export default function Hero() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const totalCards = 7

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

  const getCardClass = (index: number) => {
    const diff = (index - currentCardIndex + totalCards) % totalCards
    const prevDiff = currentCardIndex - index
    const normalizedPrevDiff = prevDiff < 0 ? prevDiff + totalCards : prevDiff

    if (index === currentCardIndex) {
      return 'hero-card active'
    } else if (diff === 1 || normalizedPrevDiff === 1) {
      return diff === 1 ? 'hero-card next-1' : 'hero-card prev-1'
    } else if (diff === 2 || normalizedPrevDiff === 2) {
      return diff === 2 ? 'hero-card next-2' : 'hero-card prev-2'
    } else if (diff === 3 || normalizedPrevDiff === 3) {
      return diff === 3 ? 'hero-card next-3' : 'hero-card prev-3'
    } else {
      return 'hero-card'
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Crafting Digital <span className="highlight">Experiences</span> That Matter
          </h1>
          <p className="hero-description">
            Web Developer & UI/UX Designer passionate about creating beautiful, functional, and user-centered digital solutions.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-carousel">
          <div className="we-arrow left" onClick={prevCard}>&#10094;</div>
          <div className="we-card-container">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div key={index} className={getCardClass(index - 1)}>
                <h3>Project {index}</h3>
                <p>Amazing digital solution #{index}</p>
              </div>
            ))}
          </div>
          <div className="we-arrow right" onClick={nextCard}>&#10095;</div>
        </div>
      </div>
    </section>
  )
}

