import React, {createContext, useState} from 'react';
import Home from './pages/Home';

export const ThemeContext = createContext();

const App = () => {
  const [theme,setTheme] = useState('light');
  const changeTheme = (val)=>{
    setTheme(val)
  }
  
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      <Home />
    </ThemeContext.Provider>
      
    
  );
};

export default App;