import './App.css';
import './components/CountriesCard.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CountriesCard from '../src/components/CountriesCard';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState([]);
  const [continent, setContinent] = useState('Choose');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  const filterCountries = countries.filter(
    (countries) =>
      countries.name.toLowerCase().includes(query) ||
      (countries.name.toUpperCase().includes(query) &&
        (countries.continent === continent || continent === 'Choose'))
  );
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
                <input
                  placeholder="Search A Flag!"
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
            </div>
            <select
              className="select"
              value={continent}
              onChange={(e) => setContinent(e.target.value)}
            >
              <option value="Choose">Choose</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="Oceania">Oceania</option>
              <option value="South America">South America</option>
            </select>
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
