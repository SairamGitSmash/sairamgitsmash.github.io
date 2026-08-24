import GlowBackground from '../components/GlowBackground.jsx'

const groups = [
  { title: 'Java & Spring', core: true, items: ['Java', 'Spring Boot', 'Spring AI', 'Spring MVC', 'Hibernate / JPA', 'Microservices', 'REST APIs'] },
  { title: 'Generative AI', ai: true, items: ['LangChain', 'Retrieval-Augmented Generation (RAG)', 'OpenAI GPT-4 API', 'HuggingFace', 'Prompt Engineering', 'NLP'] },
  { title: 'Front End', items: ['React', 'Angular.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Data & Testing', items: ['MySQL', 'SQL Server', 'Oracle', 'PL/SQL', 'Selenium', 'JUnit'] },
  { title: 'DevOps & Tools', items: ['Docker', 'GitHub Actions', 'Git', 'Jira', 'Cloud Computing Fundamentals'] },
]

export default function Skills() {
  return (
    <section style={{ overflow: 'hidden' }}>
      <GlowBackground variant="single" />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="sec-head">
          <div className="sec-kicker">Skills</div>
          <h1>What I work with</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {groups.map((g) => (
            <div key={g.title} className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>{g.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.items.map((item) => {
                  const glow = g.core ? 'var(--violet)' : g.ai ? 'var(--cyan)' : null
                  return (
                    <span
                      key={item}
                      style={{
                        fontSize: 13, padding: '6px 12px', borderRadius: 100,
                        border: `1px solid ${glow || 'var(--border-strong)'}`,
                        color: glow || 'var(--text-dim)',
                        background: glow ? (g.core ? 'var(--violet-soft)' : 'var(--cyan-soft)') : 'transparent',
                        fontWeight: glow ? 600 : 400,
                        boxShadow: glow ? (g.core ? 'var(--glow-violet)' : 'var(--glow-cyan)') : 'none',
                      }}
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
