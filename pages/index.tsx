import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SocialButtons from '@/components/SocialButtons'

export default function Home() {
  return (
    <>
      <Head>
        <title>WebDev Solutions | Web Development Agency & UI/UX Design Services</title>
        <meta 
          name="description" 
          content="WebDev Solutions - A leading web development agency from Pakistan. Specializing in React, Django, Python, and creating seamless digital experiences for businesses like DataFitt, Alfalah Maid Services, and more." 
        />
        <meta 
          name="keywords" 
          content="web development agency, UI/UX design services, web design company, React, Django, Python, TypeScript, HTML, CSS, JavaScript, Figma, Pakistan, web development services" 
        />
        <meta name="author" content="WebDev Solutions" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WebDev Solutions | Web Development Agency & UI/UX Design Services" />
        <meta 
          property="og:description" 
          content="A leading web development agency from Pakistan. Specializing in React, Django, Python, and creating seamless digital experiences for businesses." 
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebDev Solutions | Web Development Agency" />
        <meta 
          name="twitter:description" 
          content="A leading web development agency from Pakistan. Specializing in React, Django, Python." 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebDev Solutions",
              "description": "A leading web development agency specializing in web development, UI/UX design, and digital solutions",
              "url": "https://yourwebsite.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://github.com/webdevsolutions",
                "https://instagram.com/webdevsolutions"
              ],
              "knowsAbout": [
                "Web Development",
                "Frontend Development",
                "UI/UX Design",
                "Graphic Design",
                "React",
                "Django",
                "Python",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Figma",
                "SEO Optimization",
                "Responsive Design"
              ],
              "serviceType": [
                "Web Development",
                "UI/UX Design",
                "Graphic Design",
                "SEO Optimization",
                "Web Design"
              ]
            })
          }}
        />
      </Head>

      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <SocialButtons />
    </>
  )
}

