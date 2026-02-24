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

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="scene">
      <div className="scene-photo" aria-hidden="true" />
      <div className="scene-fade" aria-hidden="true" />

      <main className="glass-shell">
        <header className="shell-header">
          <div className="brand-wrap">
            <img src="/harmony-mark.svg" alt="" aria-hidden="true" className="brand-mark" />
            <div>
              <p className="brand">Harmony Additives</p>
              <p className="brand-sub">Official Link Hub</p>
            </div>
          </div>
          <span className="status-dot" aria-label="Live links" />
        </header>

        <p className="intro">All official Harmony Additives links in one place.</p>

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


