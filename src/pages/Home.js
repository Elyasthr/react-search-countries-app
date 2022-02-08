import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Search from '../components/Search.js/Search';
import Card from '../components/Card';

const Home = ({onClick,theme}) => {
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
    <div className="container">
        <Header onClick={onClick} theme={theme}/>
        <Search />
        <ul>
          {
            countriesArray.map((country) => (
              <Card country={country} key={country.name} />
            ))
          }
        </ul>
       
      </div>
  );
};

export default Home;