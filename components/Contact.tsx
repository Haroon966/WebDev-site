import { AnimatedGlobe, AnimatedMail, AnimatedPhone } from './AnimatedIcons'

export default function Contact() {
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
                <a href="mailto:contact@codenest.fun" style={{ color: 'inherit', textDecoration: 'none' }}>
                  contact@codenest.fun
                </a>
              </p>
            </div>
            <div className="contact-item">
            <div className="contact-icon"><AnimatedPhone size={40} /></div>
            <h3>Connect</h3>
            <p>
            <a 
                href="https://x.com/SameerS69998063" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
            >
                X (Twitter): @SameerS69998063
            </a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

