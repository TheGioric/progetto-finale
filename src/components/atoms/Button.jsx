function Button({ children, onClick }) {
  return (
    <button
      style={{
        padding: '8px 16px',
        margin: '4px',
        backgroundColor: '#4b2ff7',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;