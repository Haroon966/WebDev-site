import { FaGlobe, FaEnvelope, FaMobileAlt } from 'react-icons/fa'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss your next web development project
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><FaGlobe /></div>
              <h3>Location</h3>
              <p>Pakistan</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@haroonali.dev" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Contact me via form
                </a>
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaMobileAlt /></div>
              <h3>Connect</h3>
              <p>
                <a 
                  href="https://instagram.com/haroon.1920" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Instagram: @haroon.1920
                </a>
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

