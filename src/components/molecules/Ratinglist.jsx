function Ratinglist({ ratings, onDelete }) {
  const labels = ['Brutto', 'Decente', 'Bello', 'Meraviglioso'];

  const countRatings = ratings.reduce((acc, rating) => {
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ marginTop: '8px' }}>
      {Object.entries(countRatings).map(([rating, count]) => (
        <div key={rating} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '4px 0',
          borderBottom: '1px solid #4b2ff7'
        }}>
          <span>{labels[rating]} ({count} vot{count > 1 ? 'i' : 'o'})</span>
          <button
            onClick={() => {
              const newRatings = ratings.filter(r => r !== parseInt(rating));
              onDelete(newRatings);
            }}
            style={{
              backgroundColor: '#ff4b5c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              padding: '2px 6px',
              fontSize: '12px'
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Ratinglist;

