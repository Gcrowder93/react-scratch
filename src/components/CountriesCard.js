import React from 'react';
import './CountriesCard.css';

export default function CountriesCard({ name, iso2 }) {
  return (
    <div className="App">
      <div className="grid">
        <div className="countries-card">
          <div className="details">
            {/* <div className="row"> */}
            <div className="name">{name}</div>
            {/* </div> */}
          </div>
          <div className="image">
            {/* <div className="row"> */}
            <img src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
