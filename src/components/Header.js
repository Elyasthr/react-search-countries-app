import React from 'react';
const Header = ({onClick,theme}) => {

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    onClick(newTheme);
  }
  return (
    <div className='header'>
      <h1>Where in the world?</h1>
      <div onClick={switchTheme}>
        <h2>Darkmode</h2>
      </div>
    </div>
  );
};

export default Header;