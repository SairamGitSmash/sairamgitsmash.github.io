import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <NavLink to="/" className="brand">
            Siva Satya Sai Ram Toleti
          </NavLink>
          <nav className="site-nav">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <Outlet />

      <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 0', textAlign: 'center' }}>
        <div style={{ fontSize: 12.5, color: 'var(--text-faint)' }}>
          Delray Beach, FL &middot; built with React &amp; deployed with GitHub Pages
        </div>
      </footer>
    </>
  )
}