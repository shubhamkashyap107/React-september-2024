import React from 'react';

const Cards = ({ image, name }) => {
  return (
    <div style={{marginTop : "20px", border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>{name}</h3>
    </div>
  );
};

export default Cards;
