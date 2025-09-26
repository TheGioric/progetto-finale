import Heading from './../atoms/Heading';

function Header() {
  return (
    <header style={{
      padding: '16px',
      textAlign: 'center',
      backgroundColor: '#0d0d2a',
      boxShadow: '0px 4px 10px #4b2ff7'
    }}>
      <Heading level={1}>Art Gallery</Heading>
      <p>Scopri i disegni dei nostri artisti</p>
    </header>
  );
}
export default Header;