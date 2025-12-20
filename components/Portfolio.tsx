interface PortfolioItem {
  title: string
  description: string
  tags: string[]
}

export default function Portfolio() {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'DataFitt Website',
      description: 'Professional business website developed with modern design principles and optimized user experience.',
      tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Alfalah Maid Services',
      description: 'Complete website solution for maid services business with booking system and responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    },
    {
      title: 'Aitemaad Maid Services',
      description: 'Website and booking system for maid services, featuring modern UI/UX design and seamless functionality.',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    },
    {
      title: 'Alfalah Pure Drop',
      description: 'Business website with clean design and optimized for conversions and user engagement.',
      tags: ['Web Design', 'UI/UX', 'Responsive Design'],
    },
    {
      title: 'Alfalah Patient Care Services',
      description: 'Professional healthcare services website providing patient care solutions with modern design and user-friendly interface.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Healthcare'],
    },
    {
      title: 'Alfalah Handyman Services',
      description: 'Comprehensive handyman services website offering electrical, plumbing, AC repair, and cleaning services with booking system.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Services'],
    },
    {
      title: 'E-Commerce Pet Shop',
      description: 'Django-based eCommerce application for browsing products, shopping cart, and user authentication with admin panel.',
      tags: ['Django', 'Python', 'HTML', 'CSS'],
    },
    {
      title: 'Inventory Management System',
      description: 'Lightweight and efficient inventory management system built with modern web technologies for tracking and organizing inventory.',
      tags: ['JavaScript', 'Web Development', 'Productivity'],
    },
    {
      title: 'Effortless Tools',
      description: 'Collection of fast & easy-to-use online tools for file conversion, image processing, and utilities—all in one place!',
      tags: ['TypeScript', 'React', 'Web Tools'],
    },
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">Showcasing my latest web development projects</p>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <article key={index} className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-placeholder">Project {index + 1}</div>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

