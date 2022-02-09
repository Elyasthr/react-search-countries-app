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
  const [choiceCountry,setChoiceCountry] = useState(null);
  
  const handleChange = (val)=>{
    setChoiceRegion(val);
  }

  const secondHandleChange = (val)=>{
    setChoiceCountry(val)
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
        console.log(choiceRegion)
        const sortRegionArray = countriesArray.filter((country)=>country.region === choiceRegion)
        if(choiceCountry){
          console.log('test1')
        }
        else{
          setFilterCountriesArray(sortRegionArray)
        }
      }
      else{
        if(choiceCountry){
          console.log('test2')
        }
        else{
          setFilterCountriesArray(countriesArray)
        }
      }
      
      
    };
    filterCountries();

  },[notPlayed,countriesArray,choiceRegion,choiceCountry])

  return (
    <div data-theme={theme} className="root">
      <div className="container">
          <Header />
          <Search onChange={handleChange} onChanger={secondHandleChange}/>
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