export default function GlowBackground({ variant = 'default' }) {
  const configs = {
    default: [
      { top: '-10%', left: '10%', size: 420, color: 'rgba(124,108,255,0.28)' },
      { top: '20%', right: '5%', size: 380, color: 'rgba(53,230,224,0.18)' },
    ],
    single: [
      { top: '-5%', left: '50%', size: 500, color: 'rgba(124,108,255,0.22)' },
    ],
  }
  const orbs = configs[variant] || configs.default

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      {orbs.map((o, i) => (
        <div
          key={i}
          className="glow-orb"
          style={{
            top: o.top, left: o.left, right: o.right,
            width: o.size, height: o.size,
            background: o.color,
          }}
        />
      ))}
    </div>
  )
}
