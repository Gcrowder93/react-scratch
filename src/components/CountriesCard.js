import React from 'react';
import './CountriesCard.css';
// import { useState, useEffect } from 'react';

export default function CountriesCard({ name }) {
  return (
    <div className="countries-card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
      {/* <div className="image">
        <img src={iso2} /> */}
    </div>
    // </div>
  );
}
