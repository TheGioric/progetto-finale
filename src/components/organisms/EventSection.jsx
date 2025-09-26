import Heading from "../atoms/Heading";

function EventSection() {
  const events = [
    {
      id: 1,
      title: "Salone dell’Alto Artigianato Italiano",
      date: "2–5 Ottobre 2025",
      location: "Venezia",
      url: "https://www.visititaly.eu/it/mostre-eventi-e-spettacoli/mostre-ed-eventi-imperdibili-ad-ottobre-2025-in-italia"
    },
    {
      id: 2,
      title: "Mostra 'Entanglements' di Yuko Mohri",
      date: "Fino all’11 Gennaio 2026",
      location: "Milano – HangarBicocca",
      url: "https://mostra-mi.it/news/mostre-italia/mostre-ed-esposizioni-di-arte-contemporanea-lautunno-2025-in-italia"
    },
    {
      id: 3,
      title: "Halloween Celebration",
      date: "31 Ottobre 2025",
      location: "Marlia (LU)",
      url: "https://www.msn.com/it-it/intrattenimento/musica/halloween-2025-3-eventi-imperdibili-in-italia/ar-AA1Nl9SU"
    },
    {
      id: 4,
      title: "Quadriennale d’Arte 'Fantastica'",
      date: "Ottobre 2025",
      location: "Roma – Palazzo delle Esposizioni",
      url: "https://mostra-mi.it/news/mostre-italia/mostre-ed-esposizioni-di-arte-contemporanea-lautunno-2025-in-italia"
    }
  ];

  return (
    <div style={{ padding: '16px', marginTop: '32px', background: '#111', borderRadius: '10px', color: 'white' }}>
      <Heading level={2}>Eventi Artistici in Italia – Ottobre 2025</Heading>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {events.map(e => (
          <li key={e.id} style={{ marginBottom: '12px', padding: '8px', borderBottom: '1px solid #4b2ff7' }}>
            <strong>{e.title}</strong><br />
            {e.date} – {e.location}<br />
            <a href={e.url} target="_blank" rel="noopener noreferrer" style={{ color: '#4b2ff7' }}>
              Vai all’evento →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventSection;