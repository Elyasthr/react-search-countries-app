import React, {useState} from 'react';
import Home from './pages/Home';



const App = () => {
  const [theme,setTheme] = useState('light');
  
  return (
    <div data-theme={theme} className="root">
      <Home onClick={val => setTheme(val)} theme={theme}/>
    </div>
  );
};

export default App;