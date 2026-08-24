const rows = [
  {
    name: 'Master of Science, Computer Science',
    sub: 'Florida Atlantic University, Boca Raton, FL \u00b7 GPA 3.93/4.00',
    date: 'Aug 2024 \u2013 May 2026',
  },
  {
    name: 'Bachelor of Technology, Electrical & Electronics Engineering',
    sub: 'Bonam Venkata Chalamaiah Engineering College \u2014 Affiliated to JNTU Kakinada',
    date: 'Jun 2017 \u2013 Aug 2020',
  },
  {
    name: 'Oracle Certified Associate, Java SE 8 Programmer',
    sub: 'Oracle University',
    date: 'Certification',
  },
]

export default function Education() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-kicker">Education</div>
          <h1>Background</h1>
        </div>

        <div className="card">
          {rows.map((r, i) => (
            <div
              key={r.name}
              style={{
                display: 'flex', justifyContent: 'space-between', gap: 20,
                padding: '24px 28px',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: 15.5 }}>{r.name}</div>
                <div style={{ color: 'var(--text-dim)', fontSize: 13.5, marginTop: 3 }}>{r.sub}</div>
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--text-faint)', whiteSpace: 'nowrap', paddingTop: 2 }}>{r.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
