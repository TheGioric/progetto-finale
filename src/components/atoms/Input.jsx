function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #4b2ff7',
        width: '100%',
        backgroundColor: '#1a1a2e',
        color: 'white',
        fontFamily: 'Comic Sans MS, cursive'
      }}
    />
  );
}

export default Input;