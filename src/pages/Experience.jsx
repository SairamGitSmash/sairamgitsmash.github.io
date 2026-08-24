const bullets = [
  'Developed Python and Java database models, REST APIs, and views to power the IT Asset Management (ITAM) enterprise web application.',
  "Built and styled the application's user interface using HTML, XHTML, AJAX, CSS, and JavaScript.",
  'Partnered with business stakeholders and subject matter experts to gather requirements and translate them into technical specifications.',
  'Engineered a bulk-upload and processing feature using a custom Excel parser to validate and insert asset data into the database.',
  'Rewrote an existing Java program as a Python module to standardize and transform output data formats.',
  'Optimized database calls using SQL, Java Persistence API (JPA), and Hibernate to improve data-layer performance.',
  'Built dynamic, responsive web pages using React, HTML5, CSS3, jQuery, Angular.js, and Bootstrap.',
  'Delivered coding, unit testing, and integration testing to produce executable, production-ready code.',
  'Developed and maintained automated test scripts to support release quality during a QA rotation.',
]

export default function Experience() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-kicker">Experience</div>
          <h1>Where I&rsquo;ve worked</h1>
        </div>

        <div className="card" style={{ padding: 34, display: 'grid', gridTemplateColumns: '190px 1fr', gap: 28 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: 'var(--cyan)' }}>
              Mar 2021 &ndash; Aug 2024
            </div>
            <div style={{ color: 'var(--text-faint)', fontSize: 13.5 }}>3 yrs 6 mos</div>
          </div>
          <div>
            <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Software Engineer</h3>
            <div style={{ color: 'var(--text-dim)', fontSize: 14.5, marginBottom: 22 }}>
              Virtusa Consulting Services &middot; Client: British Telecom &middot; Hyderabad, India
            </div>
            <ul style={{ listStyle: 'none' }}>
              {bullets.map((b) => (
                <li key={b} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 15, color: '#C7CCE6' }}>
                  <span style={{ color: 'var(--violet)', flexShrink: 0 }}>&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
