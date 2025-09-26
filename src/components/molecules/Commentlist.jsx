function CommentList({ comments, onDelete }) {
  return (
    <div style={{ marginTop: '8px' }}>
      {comments.map((c, idx) => (
        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: '1px solid #4b2ff7' }}>
          <span>{c}</span>
          <button
            onClick={() => onDelete(idx)}
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

export default CommentList;
