import './App.css';
import './components/CountriesCard.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CountriesCard from '../src/components/CountriesCard';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';
import { TextField, Select, MenuItem } from '@mui/material';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState([]);
  const [continent, setContinent] = useState('Choose');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('A-Z');

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries(order);
      setCountries(countriesData);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, order]);

  const filterCountries = countries
    .filter(
      (countries) =>
        (countries.name.toLowerCase().includes(query) || countries.name.includes(query)) &&
        (countries.continent === continent || continent === 'Choose')
    )
    .sort((a, b) => {
      if (order === 'A-Z') {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      } else {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      }
    });

  return (
    <section className="main">
      <div className="App">
        <h1>Country List</h1>
        {loading && <span className="loader"></span>}
        {!loading && (
          <>
            <div className="row">
              <div className="col">
                <Header />

                <TextField
                  placeholder="Search A Flag!"
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
            </div>
            <br></br>
            <Select
              className="select"
              value={continent}
              onChange={(e) => setContinent(e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Antarctica">Antarctica</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="North America">North America</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
              <MenuItem value="South America">South America</MenuItem>
            </Select>
            <Select className="dropdown" value={order} onChange={(e) => setOrder(e.target.value)}>
              <MenuItem value="A-Z">A-Z</MenuItem>
              <MenuItem value="Z-A">Z-A</MenuItem>
            </Select>
            <div className="box">
              {filterCountries.map((countries) => (
                <CountriesCard key={countries.name} {...countries} />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </section>
  );
}

export default App;
