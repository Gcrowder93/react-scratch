import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CountriesCard from '../src/components/CountriesCard';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState([]);
  const [continent, setContinent] = useState('Choose');
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    };
    fetchData();
  }, []);

  const filterCountries = countries.filter(
    (countries) =>
      countries.name.includes(query) &&
      (countries.continent === continent || continent === 'Choose')
  );

  return (
    <section className="main">
      <Header />
      <input
        placeholder="Search A Flag!"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <select className="select" value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="Choose">Choose</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
      {filterCountries.map((countries) => (
        <CountriesCard key={countries.name} {...countries} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
