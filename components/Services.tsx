import { FaPalette, FaLaptopCode, FaMobileAlt, FaSearch, FaBolt, FaWrench } from 'react-icons/fa'
import { ReactNode } from 'react'

interface Service {
  icon: ReactNode
  title: string
  description: string
}

export default function Services() {
  const services: Service[] = [
    {
      icon: <FaPalette />,
      title: 'Web Design',
      description: 'Custom, modern designs that reflect your brand identity and engage your audience effectively.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'Full-stack development using latest technologies to build fast, secure, and scalable websites.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.',
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Technical SEO, on-page optimization, and performance tuning to rank higher in search results.',
    },
    {
      icon: <FaBolt />,
      title: 'Performance Optimization',
      description: 'Speed optimization, code minification, and image optimization for lightning-fast load times.',
    },
    {
      icon: <FaWrench />,
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, updates, and technical support to keep your site running smoothly.',
    },
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'Logo design, branding materials, and visual identity creation to enhance your brand presence.',
    },
  ]

  return (
    <section id="services" className="services" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">What I Can Do</h2>
        <p className="section-subtitle">
          Comprehensive web development services tailored to your needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

