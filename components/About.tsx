import { AnimatedRocket, AnimatedArrowUpRight } from './AnimatedIcons'
import Image from 'next/image'

export default function About() {
  const skills = [
    'HTML5 & CSS3',
    'JavaScript',
    'React',
    'Django',
    'Python',
    'TypeScript',
    'Figma',
    'UI/UX Design',
    'Graphic Design',
    'Responsive Design',
    'SEO Optimization',
  ]

  const projectImages = [
    { src: '/images/alfalahmaidservices.png', height: 'tall' },
    { src: '/images/alfalahpuredrop.png', height: 'short' },
    { src: '/images/aitemaadmaidservices.png', height: 'tall' },
    { src: '/images/ecomerce-petstore.png', height: 'short' },
  ]

  // Split images into two columns
  const column1Images = projectImages.filter((_, index) => index % 2 === 0)
  const column2Images = projectImages.filter((_, index) => index % 2 === 1)

  return (
    <section id="about" className="about" data-aos="fade-up">
      {/* Full-width content section */}
      <div className="about-main">
        <div className="about-main-content">
          {/* Introduction Section - Left Side */}
          <div className="about-intro-section">
            <h2 className="about-title">About Us</h2>
            <p className="about-subtitle">
              Crafting digital experiences through code, design, and innovation
            </p>
            <p className="about-intro-text">
              We are a <strong>professional web development agency</strong> specializing in creating seamless digital experiences for businesses. Our team has developed websites for various companies including DataFitt, Alfalah Maid Services, Alfalah Pure Drop, and Aitemaad Maid Services.
            </p>
            <p className="about-description">
              Our expertise spans web development, logo design, branding materials, and user-friendly interfaces. We also develop productivity tools, including Chrome extensions for managing bookmarks and custom links. Our focus is on crafting visually appealing, user-centric designs while ensuring functionality and efficiency.
            </p>
            <p className="about-description">
              Constantly exploring new technologies and staying updated with the latest trends including Python Django, we strive to deliver innovative solutions that enhance user experiences and drive business growth. <AnimatedRocket size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.5rem' }} />
            </p>
          </div>

          {/* Project Images Grid - Right Side */}
          <div className="about-projects-grid">
            {/* First Column */}
            <div className="project-column project-column-1">
              {column1Images.map((image, index) => (
                <div key={index} className="project-image-wrapper">
                  <Image
                    src={image.src}
                    alt={`Project ${index + 1}`}
                    width={400}
                    height={300}
                    className="project-image"
                  />
                </div>
              ))}
              <button 
                className="more-projects-btn"
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio')
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                More Projects
                <AnimatedArrowUpRight size={20} className="btn-arrow-icon" />
              </button>
            </div>
            
            {/* Second Column */}
            <div className="project-column project-column-2">
            <button 
                className="more-projects-btn-right"
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio')
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                More Projects
                <AnimatedArrowUpRight size={20} className="btn-arrow-icon" />
              </button>
              {column2Images.map((image, index) => (
                <div key={index} className="project-image-wrapper">
                  <Image
                    src={image.src}
                    alt={`Project ${index + 2}`}
                    width={400}
                    height={300}
                    className="project-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width skills section */}
      <div className="about-skills-section">
        <div className="about-skills-content">
          <h3 className="skills-title">Core Skills</h3>
          <div className="skills-scroll-container">
            <div className="skills-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <span key={`${skill}-${index}`} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

