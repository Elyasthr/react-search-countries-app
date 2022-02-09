import React, {useContext, useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Search from '../components/Search.js/Search';
import Card from '../components/Card';
import { ThemeContext } from '../App';

const Home = () => {
  const  {theme}  = useContext(ThemeContext);
  const [notPlayed,setNotPlayed] = useState(true);
  const [countriesArray,setCountriesArray] = useState([]); 
  const [filterCountriesArray,setFilterCountriesArray] = useState([]);
  const [choiceRegion,setChoiceRegion] = useState(null);
  
  const handleChange = (val)=>{
    setChoiceRegion(val);
  }

  useEffect(()=>{
    if(notPlayed){
      axios.get('https://restcountries.com/v2/all?fields=name,population,region,capital,flag,subregion,nativeName,topLevelDomain,currencies,languages,borders,alpha3Code')
      .then((res) => {
        console.log(('un tour'));
        const newCountriesArray = res.data;
        setCountriesArray(newCountriesArray);
      })
      .catch((err) => console.log(err));

      setNotPlayed(false)
    }

    const filterCountries = ()=>{
      if(choiceRegion){
        const sortRegionArray = countriesArray.filter((country)=>country.region === choiceRegion)
        setFilterCountriesArray(sortRegionArray)
      }
      else{
        console.log("i want all")
        setFilterCountriesArray(countriesArray)
      }
      
      
    };
    filterCountries();

  },[notPlayed,countriesArray,choiceRegion])

  return (
    <div data-theme={theme} className="root">
      <div className="container">
          <Header />
          <Search onChange={handleChange}/>
          <ul>
            {
              filterCountriesArray.map((country) => (
                <Card country={country} key={country.name} />
              ))
            }
          </ul>
      </div>
    </div>
  );
};

export default Home;