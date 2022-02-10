import React from 'react';
import { NavLink } from 'react-router-dom';

export const numberFormat = (popnum) => {
  return popnum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Card = ({country}) => {
  
  return (
    <NavLink end to='country' style={{ color: 'inherit', textDecoration: 'inherit'}} state={{country}} >
      <li className='card-country'>
        <img src={country.flag} alt="flag"/>
        <div className='card-infos card-infos-country'>
          <h3>{country.name}</h3>
          <ul>
            <li><span>Population: </span>{numberFormat(country.population)}</li>
            <li><span>Region: </span>{country.region}</li>
            <li><span>Capital: </span>{country.capital}</li>
          </ul>
        </div>
      </li>
    </NavLink>
  );
};

export default Card;