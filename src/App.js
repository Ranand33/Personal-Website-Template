import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Content from './Content';
import './index.css';

function App() {
    const [theme, setTheme] = useState('dark');
  
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  
    const toggleTheme = () =>
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  
    return (
      <>
        <Banner />
        <div className="container">
          <Navbar onToggle={toggleTheme} />
          <Content />
        </div>
      </>
    );
  }
  
  export default App;
