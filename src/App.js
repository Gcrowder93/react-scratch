import './App.css';
import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';
import CountriesCard from '../src/components/CountriesCard';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      <Footer />
      <CountriesCard />
    </section>
  );
}

export default App;
