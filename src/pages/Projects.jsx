const projects = [
  {
    tag: 'Generative AI \u00b7 RAG',
    glow: 'cyan',
    title: 'AI-Powered Academic Assistant Bot',
    period: 'Jan 2025 \u2013 Apr 2025',
    description:
      'A Discord-based assistant bot that helps students learn programming and machine learning concepts through natural, context-aware conversation. Built on a multi-agent LangChain architecture with Retrieval-Augmented Generation over the OpenAI GPT-4 API, containerized with Docker and deployed via GitHub Actions.',
    stack: ['Python', 'LangChain', 'RAG', 'GPT-4 API', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/SairamGitSmash/Devara_owlmind',
  },
  {
    tag: 'Full Stack \u00b7 Sustainability',
    glow: 'violet',
    title: 'Eco \u2013 Carbon Credit System',
    period: 'Jan 2025 \u2013 Apr 2025',
    description:
      'A full-stack web application that rewards users with carbon credits for sustainable commuting \u2014 walking, cycling, and public transport. Includes a personalized dashboard with map-based trip visualization to track savings and environmental impact over time.',
    stack: ['Flask', 'Flask-SQLAlchemy', 'Leaflet.js', 'Bootstrap 5', 'SQLite'],
    github: 'https://github.com/SairamGitSmash/Eco-Carbon-Credit-System',
  },
]

export default function Projects() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-kicker">Projects</div>
          <h1>Things I&rsquo;ve built</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22 }}>
          {projects.map((p) => {
            const color = p.glow === 'cyan' ? 'var(--cyan)' : 'var(--violet)'
            return (
              <div key={p.title} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color, marginBottom: 10 }}>
                  {p.tag}
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 4 }}>{p.title}</h3>
                <div style={{ fontSize: 13, color: 'var(--text-faint)', marginBottom: 16 }}>{p.period}</div>
                <p style={{ fontSize: 14.5, color: 'var(--text-dim)', marginBottom: 20, flexGrow: 1 }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                  {p.stack.map((s) => (
                    <span key={s} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 6, background: 'var(--surface-2)', color: 'var(--text-dim)' }}>
                      {s}
                    </span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13.5, fontWeight: 600, color }}>
                  View on GitHub &rarr;
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
