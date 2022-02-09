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
          <li><span>Population: </span>{numberFormat(country.population)}</li>
          <li><span>Region: </span>{country.region}</li>
          <li><span>Capital: </span>{country.capital}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;