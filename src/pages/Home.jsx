import { Link } from 'react-router-dom'
import GlowBackground from '../components/GlowBackground.jsx'

const quickLinks = [
  { to: '/skills', title: 'Skills', desc: 'Java, Spring Boot, Spring AI, React, and the full stack.' },
  { to: '/experience', title: 'Experience', desc: '3.5 years building enterprise Java at Virtusa / British Telecom.' },
  { to: '/projects', title: 'Projects', desc: 'RAG-powered Discord bot and a full-stack sustainability app.' },
  { to: '/education', title: 'Education', desc: 'MS Computer Science @ FAU, GPA 3.93/4.00, focused on GenAI.' },
]

export default function Home() {
  return (
    <>
      <section style={{ padding: '110px 0 96px', overflow: 'hidden' }}>
        <GlowBackground variant="default" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow">
            <span className="dot" />
            Open to Full Stack Java / Spring AI roles
          </div>
          <h1 style={{
            fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700, lineHeight: 1.12,
            marginBottom: 22, maxWidth: 780,
          }}>
            I build with{' '}
            <span style={{ color: 'var(--violet)', textShadow: 'var(--glow-violet)' }}>Spring Boot</span>{' '}
            and{' '}
            <span style={{ color: 'var(--cyan)', textShadow: 'var(--glow-cyan)' }}>Spring AI</span>.
          </h1>
          <p style={{ fontSize: 17.5, color: 'var(--text-dim)', maxWidth: 560, marginBottom: 36 }}>
            4+ years building full-stack Java applications — REST APIs, microservices, and Spring
            Boot backends paired with React front ends. I hold an MS in Computer Science from
            Florida Atlantic University (GPA 3.93/4.00), focused on Generative AI, and bring that
            into full-stack systems through Spring AI, LangChain, and RAG pipelines.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a className="btn primary" href="/Siva_Toleti_Resume.pdf" download>
              Download Resume
            </a>
            <a className="btn" href="http://www.linkedin.com/in/siva-satya-sai-ram-toleti-b253421bb" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="btn" href="https://github.com/SairamGitSmash" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
            {quickLinks.map((q) => (
              <Link
                key={q.to}
                to={q.to}
                className="card"
                style={{ display: 'block', padding: 26, color: 'var(--text)' }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{q.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-dim)' }}>{q.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
