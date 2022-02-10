import React, {createContext, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import NotFound from './pages/NotFound';
import Header from './components/Header';

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
          <Header/>
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