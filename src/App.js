import React, {createContext, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import NotFound from './pages/NotFound';

export const ThemeContext = createContext();

const App = () => {
  const [theme,setTheme] = useState('light');
  const changeTheme = (val)=>{
    setTheme(val)
  }
  
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      <BrowserRouter>
        <div data-theme={theme} className="root">
          <div className="container">
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/country" element={<Country />}/>
                <Route exact path="*" element={<NotFound />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
      
    
  );
};

export default App;