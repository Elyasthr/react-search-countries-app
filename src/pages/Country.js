import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { numberFormat } from '../components/Card';

const Country = () => {
  const location = useLocation();
  const { country } = location.state;
  const [countryBorders,setCountryBorders] = useState();
  const [notPlayed,setNotPlayed] = useState(true);
  const getCountryBorders = country.borders.map(val => val).join();

  const onClick = () =>{
    setNotPlayed(true)
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
    if(notPlayed){
      axios.get(`https://restcountries.com/v2/alpha?codes=${getCountryBorders}`)
      .then(res => setCountryBorders(res.data))
      .catch(err => console.log(err))
      setNotPlayed(false)
    }
  },[getCountryBorders,notPlayed])

  return (
    <>
    <NavLink end to="/">
      <button className='back-button'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"/>
        </svg>
      Back</button>
    </NavLink>

    <div className='card-country-select'>
        <img src={country.flag} alt="flag"/>
        <div className="card-infos-country">
          <h3>{country.name}</h3>
          <div className='card-infos-country-ul'>
            <ul>
              <li><span>Native Name: </span>{country.nativeName}</li>
              <li><span>Population: </span>{numberFormat(country.population)}</li>
              <li><span>Region: </span>{country.region}</li>
              <li><span>Sub Region: </span>{country.subregion}</li>
              <li><span>Capital: </span>{country.capital}</li>
            </ul>

            <ul>
              <li><span>Top Level Domain: </span>{country.topLevelDomain.map((dom)=>dom)}</li>
              <li><span>Currencies: </span>{country.currencies.map((curr)=>curr.name)}</li>
              <li><span>Languages: </span>{country.languages.map((lang)=>lang.name +" ")}</li>
            </ul>
          </div>

          <div className="card-infos-country-borders">
            <h2>Border Countries: </h2>
            <ul className='ul-border'>
              
              { country.borders.length
                  ? countryBorders 
                    ? countryBorders.map((country)=>(
                        <NavLink end to='' style={{ color: 'inherit', textDecoration: 'inherit'}} state={{country}} key={country.name}>
                          <li key={country.name} onClick={onClick}>{country.name}</li>
                        </NavLink>
                      ))
                    : <li>Chargement...</li>
                  : <li>No Borders</li>
              }
            </ul>
          </div>
      </div>
    </div>
    </>
  );
};

export default Country;