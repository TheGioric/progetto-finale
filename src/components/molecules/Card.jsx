import Image from './../atoms/Image';
import Heading from './../atoms/Heading';
import Input from './../atoms/Input';
import Ratinglist from './Ratinglist'; 
import Button from './../atoms/Button';
import { useState, useEffect } from 'react';

function Card({ id, title, artist, image }) {
  const [ratings, setRatings] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem(`ratings-${id}`)) || [];
    setRatings(savedRatings);
  }, [id]);

  const addRating = () => {
    if (selectedRating !== null) {
      const newRatings = [...ratings, selectedRating];
      setRatings(newRatings);
      localStorage.setItem(`ratings-${id}`, JSON.stringify(newRatings));
      setSelectedRating(null);
    }
  };

  const deleteRating = (newRatings) => {
  setRatings(newRatings);
  localStorage.setItem(`ratings-${id}`, JSON.stringify(newRatings));
};

  return (
    <div style={{
      backgroundColor: '#1a1a2e',
      borderRadius: '10px',
      padding: '16px',
      margin: '16px',
      width: '250px',
      boxShadow: '0px 0px 10px #4b2ff7'
    }}>
      <Image src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <Heading level={3}>{title}</Heading>
      <p>by {artist}</p>

      {/* Radio buttons */}
      <div style={{ marginTop: '8px', marginBottom: '8px' }}>
        {['Brutto', 'Decente', 'Bello', 'Meraviglioso'].map((label, index) => (
          <label key={index} style={{ display: 'block', marginBottom: '4px' }}>
            <input
              type="radio"
              value={index}
              checked={selectedRating === index}
              onChange={() => setSelectedRating(index)}
              style={{ marginRight: '8px' }}
            />
            {label}
          </label>
        ))}
      </div>

      <Button onClick={addRating}>Aggiungi Voto</Button>
      <Ratinglist ratings={ratings} onDelete={deleteRating} />
    </div>
  );
}
export default Card;
