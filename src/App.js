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

  function filterCountries() {
    return countries.filter((countries) => countries.name.includes(query));
  }
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
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="Choose">Choose</option>
        <option value="Africa">Africa</option>
      </select>

      {filterCountries().map((countries) => (
        <CountriesCard key={countries.name} {...countries} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
