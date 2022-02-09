import React, {useContext, useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Search from '../components/Search.js/Search';
import Card from '../components/Card';
import { ThemeContext } from '../App';

const Home = () => {
  const  {theme}  = useContext(ThemeContext)
  const [countriesArray,setCountriesArray] = useState([]); 
  
  useEffect(()=>{
    axios.get('https://restcountries.com/v2/all?fields=name,population,region,capital,flag,subregion,nativeName,topLevelDomain,currencies,languages,borders,alpha3Code')
    .then((res) => {
      const newCountriesArray = res.data;
      setCountriesArray(newCountriesArray);
    })
    .catch((err) => console.log(err))
  },[])

  return (
    <div data-theme={theme} className="root">
      <div className="container">
          <Header />
          <Search />
          <ul>
            {
              countriesArray.map((country) => (
                <Card country={country} key={country.name} />
              ))
            }
          </ul>
      </div>
    </div>
  );
};

export default Home;