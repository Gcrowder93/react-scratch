import { client, checkError } from './client';

export async function getCountries() {
  const response = await client.from('countries').select();
  return checkError(response);
}

// import React from 'react';
// import { useState, useEffect } from 'react';
// import '.countries.css';

// export default function countries() {
//   return <div></div>;
// }
