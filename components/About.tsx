import { FaRocket } from 'react-icons/fa'

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

  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Haroon Ali, a web developer, graphic designer, and UI/UX designer passionate about creating seamless digital experiences. I've developed websites for businesses like DataFitt, Alfalah Maid Services, Alfalah Pure Drop, and Aitemaad Maid Services.
            </p>
            <p>
              Alongside web development, I design logos, branding materials, and user-friendly interfaces to enhance digital products. I also work on productivity tools, including a Chrome extension for managing bookmarks and custom links. My focus is on crafting visually appealing, user-centric designs while ensuring functionality and efficiency.
            </p>
            <p>
              Constantly exploring new technologies and currently learning more about Python Django, I strive to deliver innovative solutions that enhance user experiences. <FaRocket style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            </p>
            <div className="skills">
              <h3>Core Skills</h3>
              <div className="skills-scroll-container">
                <div className="skills-scroll">
                  {[...skills, ...skills, ...skills].map((skill, index) => (
                    <span key={`${skill}-${index}`} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

