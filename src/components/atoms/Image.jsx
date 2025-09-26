function Image({ src, alt, style }) {
  return <img src={src} alt={alt} style={{ borderRadius: '8px', ...style }} />;
}

export default Image;
