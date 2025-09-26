import Image from './../atoms/Image';
import Heading from './../atoms/Heading';
import Input from './../atoms/Input';
import CommentList from './Commentlist'; 
import Button from './../atoms/Button';
import { useState, useEffect } from 'react';

function Card({ id, title, artist, image }) {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  // Carica commenti specifici per questa Card da localStorage
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
    setComments(savedComments);
  }, [id]);

  const addComment = () => {
    if (commentInput.trim() !== '') {
      const newComments = [...comments, commentInput];
      setComments(newComments);
      localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
      setCommentInput('');
    }
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

      {/* Sezione commenti */}
      <Input
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        placeholder="Scrivi un commento..."
      />
      <Button onClick={addComment}>Aggiungi Commento</Button>

      <CommentList comments={comments} />
    </div>
  );
}

export default Card;
