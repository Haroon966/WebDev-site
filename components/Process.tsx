interface ProcessStep {
  number: string
  title: string
  description: string
}

export default function Process() {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Data Gathering & Research',
      description:
        'I start by understanding your business, target audience, competitors, and industry trends. This involves comprehensive research, stakeholder interviews, and analysis of your current digital presence to gather all necessary information for informed decision-making.',
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description:
        'Based on the research findings, I develop a strategic plan that outlines the website structure, user journey, technical requirements, and SEO strategy. This phase includes wireframing and creating a detailed project roadmap.',
    },
    {
      number: '03',
      title: 'Designing',
      description:
        'I create visually appealing designs that align with your brand identity while ensuring excellent user experience. This includes creating mockups, UI/UX design, color schemes, typography, and interactive prototypes for client review and feedback.',
    },
    {
      number: '04',
      title: 'Development',
      description:
        'Using modern web technologies and best practices, I transform the designs into a fully functional website. This phase includes frontend development, backend integration, database setup, API implementation, and rigorous testing across multiple browsers and devices.',
    },
    {
      number: '05',
      title: 'SEO Implementation',
      description:
        'I implement comprehensive SEO strategies including meta tags, structured data, semantic HTML, optimized content, sitemap creation, robots.txt configuration, and performance optimization to ensure your website ranks well in search engines.',
    },
    {
      number: '06',
      title: 'Testing & Quality Assurance',
      description:
        'Before launch, I conduct thorough testing including functionality testing, cross-browser compatibility, mobile responsiveness, performance testing, security checks, and accessibility audits to ensure everything works perfectly.',
    },
    {
      number: '07',
      title: 'Hosting & Deployment',
      description:
        'I help you choose the right hosting solution based on your needs, set up the hosting environment, configure domain and SSL certificates, deploy the website, and ensure all systems are properly configured for optimal performance and security.',
    },
    {
      number: '08',
      title: 'Launch & Maintenance',
      description:
        'After a final review and approval, I launch your website and monitor its performance. I provide training documentation, ongoing maintenance support, regular updates, and analytics monitoring to ensure continued success.',
    },
  ]

  return (
    <section id="process" className="process" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">My Development Process</h2>
        <p className="section-subtitle">
          A systematic approach to delivering exceptional websites
        </p>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="process-step"
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

