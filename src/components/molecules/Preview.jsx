import Image from './../atoms/Image';

function Preview({ name, avatar }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '8px' }}>
      <Image src={avatar} alt={name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      <p style={{ marginLeft: '8px' }}>{name}</p>
    </div>
  );
}

export default Preview;
