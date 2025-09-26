import { useEffect, useState } from 'react';
import Card from './../molecules/Card';
import { fetchDrawings } from './../../service/api';
import Input from './../atoms/Input';

function Gallery() {
  const [drawings, setDrawings] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchDrawings().then(data => setDrawings(data));
  }, []);

  // Filtra le immagini in base al nome dell'artista
  const filteredDrawings = drawings.filter(d =>
    d.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '16px' }}>
      {/* Input di ricerca */}
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cerca artista..."
      />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '16px'
      }}>
        {filteredDrawings.map(d => (
          <Card key={d.id}    // <-- essenziale per React
            id={d.id}     // <-- essenziale per commenti separati
            title={d.title}
            artist={d.artist}
            image={d.image} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;