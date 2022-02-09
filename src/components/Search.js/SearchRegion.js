import React from 'react';
import Select from 'react-select';
import { useContext } from 'react';
import { ThemeContext } from '../../App';


const SearchRegion = () => {
  const {theme} = useContext(ThemeContext);

  const colourStyles = {
    control: () => ({ 
      display: "flex",
      width: "200px",
      height: "48px",
      margin: "40px 0 32px 16px",
      padding: "0 19px 0 24px",
      backgroundColor: theme === 'light' ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
      boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
      border: "none",
      borderRadius: "5px",
      }),

    dropdownIndicator: (state) =>({
      ...state,
      color: theme === 'light' ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
    }),
    menu: () =>({
      position: "absolute",
      width: "200px",
      margin: "-25px 0 0 16px",
      padding: "0",
      backgroundColor: theme === 'light' ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
      boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
      color: theme === 'light' ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
      border: "none",
      borderRadius: "5px",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "20px",
    }),
    option: () => ({
      padding: "4px 0 4px 24px",
    }),
    placeholder: (state)=>({
      ...state,
      color:  theme === 'light' ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "20px",
    }),
    indicatorSeparator: ()=>({

    }),
    singleValue: (state)=>({
      ...state,
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "20px",
      color: theme === 'light' ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
    }),
    clearIndicator: (state)=>({
      ...state,
      padding: "0",
      color: theme === 'light' ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
    })
    
  };

  const options = [
    { value: 'africa', label: 'Africa'},
    { value: 'america', label: 'America'},
    { value: 'asia', label: 'Asia'},
    { value: 'europe', label: 'Europe'},
    { value: 'oceania', label: 'Oceania'}
  ]

  return (
    <>
      <Select
        styles={colourStyles}
        isClearable={true}
        isSearchable={false}
        options={options}
        placeholder="Filter by Region"
      />
    </>
  );
};

export default SearchRegion;