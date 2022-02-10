import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Search from '../components/Search.js/Search';
import Card from '../components/Card';

const Home = () => {
  const [notPlayed,setNotPlayed] = useState(true);
  const [countriesArray,setCountriesArray] = useState([]); 
  const [filterCountriesArray,setFilterCountriesArray] = useState([]);
  const [choiceRegion,setChoiceRegion] = useState(null);
  const [choiceCountry,setChoiceCountry] = useState(null);
  const [exist,setExist] = useState(false);
  
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
        const sortRegionArray = countriesArray.filter((country)=>country.region === choiceRegion)
        if(choiceCountry){
          const existCountry = sortRegionArray.some((country)=>country.name.toLowerCase() === choiceCountry.toLowerCase())
          if(existCountry){
            const filterChoiceArray = sortRegionArray.filter((country)=>country.name.toLowerCase() === choiceCountry.toLowerCase())
            setFilterCountriesArray(filterChoiceArray)
            setExist(true)
          }
          else{
            setExist(false)
          }
        }
        else{
          setFilterCountriesArray(sortRegionArray)
          setExist(true)
        }
      }
      else{
        if(choiceCountry){
          const existCountry = countriesArray.some((country)=>country.name.toLowerCase() === choiceCountry.toLowerCase())
          if(existCountry){
            const filterChoiceArray = countriesArray.filter((country)=>country.name.toLowerCase() === choiceCountry.toLowerCase())
            setFilterCountriesArray(filterChoiceArray)
            setExist(true)
          }
          else{
            setExist(false)
          }
        }
        else{
          setFilterCountriesArray(countriesArray)
          setExist(true)
        }
      }
      
      
    };
    filterCountries();

  },[notPlayed,countriesArray,choiceRegion,choiceCountry])

  return (
        <>
          <Header />
          <Search onChange={handleChange} onChanger={secondHandleChange}/>
          {
            exist 
            ? <ul>
                {
                  filterCountriesArray.map((country) => (
                    <Card country={country} key={country.name} />
                  ))
                }
              </ul>
            : <div className='card-country card-country-not-found'>Country Not Exist</div>
          }
        
        </>  
  )
};

export default Home;