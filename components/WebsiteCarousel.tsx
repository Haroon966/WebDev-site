interface WebsitePreview {
  name: string
  image: string
}

export default function WebsiteCarousel() {
  // Add your website images here - you can use image URLs or local images from /public folder
  const websites: WebsitePreview[] = [
    {
      name: 'DataFitt',
      image: '/images/datafitt.jpg', // Replace with your actual image path
    },
    {
      name: 'Alfalah Maid Services',
      image: '/images/alfalah-maid.jpg', // Replace with your actual image path
    },
    {
      name: 'Aitemaad Maid Services',
      image: '/images/aitemaad-maid.jpg', // Replace with your actual image path
    },
    {
      name: 'Alfalah Pure Drop',
      image: '/images/alfalah-puredrop.jpg', // Replace with your actual image path
    },
    {
      name: 'Alfalah Patient Care Services',
      image: '/images/alfalah-patientcare.jpg', // Replace with your actual image path
    },
    {
      name: 'Alfalah Handyman Services',
      image: '/images/alfalah-handyman.jpg', // Replace with your actual image path
    },
  ]

  // Duplicate websites for seamless infinite scroll
  const duplicatedWebsites = [...websites, ...websites, ...websites]

  return (
    <div className="website-cards-block">
      <div className="website-cards-scroll-container">
        <div className="website-cards-grid infinite-scroll">
          {duplicatedWebsites.map((website, index) => {
            // Calculate rotation angle for arch effect (-12 to +12 degrees)
            const positionInSet = index % websites.length
            const rotationAngle = ((positionInSet / (websites.length - 1 || 1)) * 24 - 12) // Range: -12 to 12
            return (
            <div 
              key={index} 
              className="website-card"
              style={{
                '--rotation': `${rotationAngle}deg`,
              } as React.CSSProperties}
            >
              <div className="website-card-header">
                <div className="browser-controls">
                  <span className="browser-dot"></span>
                  <span className="browser-dot"></span>
                  <span className="browser-dot"></span>
                </div>
                <div className="website-name">{website.name}</div>
              </div>
              <div className="website-image-container">
                <img
                  src={website.image}
                  alt={website.name}
                  className="website-image"
                  loading="lazy"
                />
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

