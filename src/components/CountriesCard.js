import React from 'react';
import './CountriesCard.css';

export default function CountriesCard({ name, iso2 }) {
  return (
    <div className="countries-card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
      <div className="image">
        <img src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
      </div>
    </div>
  );
}
