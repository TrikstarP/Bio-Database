import React, { useState } from 'react';
import './App.css';

function App() {
  const [showAnimalContent, setShowAnimalContent] = useState(false);
  const toggleAnimalContent = () => {
    setShowAnimalContent(!showAnimalContent);
  };
  const [showPlantContent, setShowPlantContent] = useState(false);
  const togglePlantContent = () => {
    setShowPlantContent(!showPlantContent);
  };
  const [showVertContent, setShowVertContent] = useState(false)
  const toggleVertContent = () => {
    setShowVertContent(!showVertContent);
  };
  const [showInVertContent, setShowInVertContent] = useState(false)
  const toggleInVertContent = () => {
    setShowInVertContent(!showInVertContent);
  };



  return (
    <><h1>Biology Database</h1>
    <div className="App">
      <div className='container'>
        <div className="toggle-animal" onClick={toggleAnimalContent}>
          <label htmlFor="toggle">Animal</label>
          <span className={`arrow ${showAnimalContent ? 'up' : 'down'}`} />
        </div>
      </div>
        {showAnimalContent && (
        <ul id="additional-options">
          <div className="toggle-vert" onClick={toggleVertContent}>
            <label htmlFor="toggle">Vertebrates</label>
            <span className={`arrow ${showVertContent ? 'up' : 'down'}`} />
          </div>
          <div className="toggle-invert" onClick={toggleInVertContent}>
            <label htmlFor="toggle">Invertebrates</label>
            <span className={`arrow ${showInVertContent ? 'up' : 'down'}`} />
          </div>
        </ul>
      )}
      <div className='container'>
        <div className="toggle-plantae" onClick={togglePlantContent}>
          <label htmlFor="toggle">Plantae</label>
          <span className={`arrow ${showPlantContent ? 'up' : 'down'}`} />
        </div>  
      </div>
          <ul className={`additional-options ${showPlantContent ? 'show' : ''}`}>
            <li>Trees</li>
            <li>Flowers</li>
          </ul>
    </div></>
  );
}

export default App;
