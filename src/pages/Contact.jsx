import GlowBackground from '../components/GlowBackground.jsx'

export default function Contact() {
  return (
    <section style={{ overflow: 'hidden', textAlign: 'center', padding: '110px 0' }}>
      <GlowBackground variant="single" />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          <span className="dot" />
          Let&rsquo;s talk
        </div>
        <h1 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: 700, marginBottom: 16 }}>
          Let&rsquo;s build something.
        </h1>
        <p style={{ color: 'var(--text-dim)', marginBottom: 38, fontSize: 16.5, maxWidth: 480, margin: '0 auto 38px' }}>
          Open to Full Stack Java + Spring AI roles &mdash; reach out directly or connect on LinkedIn.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a className="btn primary" href="mailto:toletisairam99@gmail.com">
            toletisairam99@gmail.com
          </a>
          <a className="btn" href="tel:+15616643611">
            +1 (561) 664-3611
          </a>
          <a className="btn" href="/Siva_Toleti_Resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
