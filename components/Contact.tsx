import { AnimatedGlobe, AnimatedMail, AnimatedPhone } from './AnimatedIcons'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! Our team will get back to you soon.')
  }

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss your next web development project with our team
        </p>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-item">
              <div className="contact-icon"><AnimatedGlobe size={40} /></div>
              <h3>Location</h3>
              <p>Pakistan</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><AnimatedMail size={40} /></div>
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@webdevsolutions.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Contact us via form
                </a>
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><AnimatedPhone size={40} /></div>
              <h3>Connect</h3>
              <p>
                <a 
                  href="https://instagram.com/webdevsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Instagram: @webdevsolutions
                </a>
              </p>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            data-aos="fade-left"
          >
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

