import React from 'react';

const Card = ({country}) => {

  const numberFormat = (popnum) => {
    return popnum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <li className='card-country'>
      <img src={country.flag} alt="flag"/>
      <div className='card-infos'>
        <h3>{country.name}</h3>
        <ul>
          <li>Population: {numberFormat(country.population)}</li>
          <li>Region: {country.region}</li>
          <li>Capital: {country.capital}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;