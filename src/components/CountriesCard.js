import React from 'react';
import './CountriesCard.css';
// import getCountries from '../services/countries';

export default function CountriesCard({ name }) {
  return (
    <div className="countries-card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
      <div className="image">
        {/* <img src={'https://flagcdn.com/20x15/png'} /> */}
        <img src={'https://flagcdn.com/24x18/${countries.iso2.toLowerCase()}.png'} />
      </div>
    </div>
  );
}
