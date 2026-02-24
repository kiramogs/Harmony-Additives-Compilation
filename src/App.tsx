import { useEffect, useState } from 'react'
import './App.css'

const officialLinks = [
  {
    title: 'Website',
    detail: 'Official company website',
    href: 'https://harmonyadditive.in/',
  },
  {
    title: 'Brochure',
    detail: 'Capabilities and profile PDF',
    href: 'https://drive.google.com/file/d/1bnTVUYxOMh6yQrtx1ssbP6eJMT4k_BzX/view?usp=sharing',
  },
  {
    title: 'Yellow Pages',
    detail: 'Business listing profile',
    href: 'https://www.harmonyyellowpages.in/',
  },
  {
    title: 'LinkedIn',
    detail: 'Company updates and network',
    href: 'https://www.linkedin.com/company/harmonyadditives/?viewAsMember=true',
  },
  {
    title: 'YouTube',
    detail: 'Videos and visual showcase',
    href: 'https://www.youtube.com/@harmonyadditives9765/videos',
  },
]

const MOBILE_QUERY = '(max-width: 767px)'
const DESKTOP_INTRO_SECONDS = 5

function App() {
  const year = new Date().getFullYear()
  const [isGlassVisible, setIsGlassVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.matchMedia(MOBILE_QUERY).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const syncDeviceMode = (event: MediaQueryListEvent) => setIsMobile(event.matches)

    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', syncDeviceMode)
    return () => mediaQuery.removeEventListener('change', syncDeviceMode)
  }, [])

  const backgroundVideoSrc = isMobile ? '/harmony-bg-mobile.mp4' : '/harmony-bg-desktop.mp4'
  const handleIntroComplete = () => setIsGlassVisible(true)

  return (
    <div className="scene">
      <video
        key={backgroundVideoSrc}
        className="scene-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={handleIntroComplete}
        onError={handleIntroComplete}
        onTimeUpdate={(event) => {
          if (isMobile || isGlassVisible) {
            return
          }

          if (event.currentTarget.currentTime >= DESKTOP_INTRO_SECONDS) {
            event.currentTarget.pause()
            handleIntroComplete()
          }
        }}
      >
        <source src={backgroundVideoSrc} type="video/mp4" />
      </video>

      <main className={`glass-shell ${isGlassVisible ? 'glass-shell-visible' : 'glass-shell-hidden'}`}>
        <header className="shell-header">
          <div className="brand-wrap">
            <img src="/harmony-mark.svg" alt="" aria-hidden="true" className="brand-mark" />
            <p className="brand">Harmony Additives</p>
          </div>
        </header>

        <section className="buttons-grid">
          {officialLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="link-button"
            >
              <span className="button-title">{item.title}</span>
              <span className="button-detail">{item.detail}</span>
            </a>
          ))}
        </section>
      </main>

      <footer className="foot">(c) {year} Harmony Additives Private Limited</footer>
    </div>
  )
}

export default App


