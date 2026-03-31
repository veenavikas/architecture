'use client';

export default function PhilosophySection() {
  const phrases = [
    'ARCHITECTURE IS FROZEN MUSIC',
    'EVERY SPACE TELLS A STORY',
    'FORM FOLLOWS MEMORY',
    'LIGHT IS THE MATERIAL',
    'STRUCTURE IS THE SCULPTURE',
    'DETAILS SHAPE ATMOSPHERE',
    'ARCHITECTURE IS FROZEN MUSIC',
    'EVERY SPACE TELLS A STORY',
    'FORM FOLLOWS MEMORY',
    'LIGHT IS THE MATERIAL',
    'STRUCTURE IS THE SCULPTURE',
    'DETAILS SHAPE ATMOSPHERE',
  ];

  return (
    <section
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid rgba(31,26,23,0.08)',
        borderBottom: '1px solid rgba(31,26,23,0.08)',
        padding: '2rem 0',
        background: 'rgba(251,247,241,0.68)',
      }}
    >
      <div className="marquee-track">
        {phrases.map((phrase, index) => (
          <span
            key={index}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 300,
              color: index % 6 === 2 || index % 6 === 5 ? 'var(--color-rust)' : 'rgba(31,26,23,0.66)',
              whiteSpace: 'nowrap',
              paddingRight: '3rem',
            }}
          >
            {phrase}
            <span
              style={{
                color: 'var(--color-rust)',
                margin: '0 1.5rem',
                fontSize: '0.6em',
                verticalAlign: 'middle',
              }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
