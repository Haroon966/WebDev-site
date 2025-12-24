import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import ScrollToTop from '@/components/ScrollToTop'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  )
}

