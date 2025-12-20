import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Haroon Ali | Web Developer & UI/UX Designer Portfolio</title>
        <meta 
          name="description" 
          content="Haroon Ali - Web developer, graphic designer, and UI/UX designer from Pakistan. Specializing in React, Django, Python, and creating seamless digital experiences for businesses like DataFitt, Alfalah Maid Services, and more." 
        />
        <meta 
          name="keywords" 
          content="Haroon Ali, web developer, UI/UX designer, graphic designer, React, Django, Python, TypeScript, HTML, CSS, JavaScript, Figma, Pakistan, freelance developer" 
        />
        <meta name="author" content="Haroon Ali" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Haroon Ali | Web Developer & UI/UX Designer" />
        <meta 
          property="og:description" 
          content="Web developer, graphic designer, and UI/UX designer from Pakistan. Specializing in React, Django, Python, and creating seamless digital experiences." 
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Haroon Ali | Web Developer & UI/UX Designer" />
        <meta 
          name="twitter:description" 
          content="Web developer, graphic designer, and UI/UX designer from Pakistan. Specializing in React, Django, Python." 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Haroon Ali",
              "jobTitle": "Web Developer & UI/UX Designer",
              "url": "https://yourwebsite.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://github.com/Haroon966",
                "https://instagram.com/haroon.1920"
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
    </>
  )
}

