import Heading from "../atoms/Heading";

function EventSection() {
  const events = [
    { id: 1, title: "Mostra di Illustrazione a Roma", date: "15 Ottobre 2025", location: "Roma" },
    { id: 2, title: "Workshop di Arte Digitale a Milano", date: "20 Ottobre 2025", location: "Milano" },
    { id: 3, title: "Fiera del Fumetto a Torino", date: "28 Ottobre 2025", location: "Torino" },
  ];

  return (
    <div style={{ padding: '16px', marginTop: '32px', background: '#111', borderRadius: '10px', color: 'white' }}>
      <Heading level={2}>Eventi per Artisti in Italia</Heading>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {events.map(e => (
          <li key={e.id} style={{ marginBottom: '12px', padding: '8px', borderBottom: '1px solid #4b2ff7' }}>
            <strong>{e.title}</strong><br />
            {e.date} - {e.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventSection;