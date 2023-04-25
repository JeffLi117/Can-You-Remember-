import './App.css';
import Title from './components/Title';
import Overlay from './components/Overlay';
import Cardholder from './components/Cardholder';
import React, { useState } from 'react';

function App() {
  const [overlay, setOverlay] = useState(false);

  function handlerOverlay() {
    setOverlay(!overlay);
  }

  

  if (overlay) {
    return (
      <div className="App grayed">
        <Title  noClick="noClick"  />
        <Overlay 
          handlerOverlay={handlerOverlay} 
          overlay={overlay}
        />
        <Cardholder noClick="noClick" />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Title/>
        <Overlay 
          handlerOverlay={handlerOverlay} 
          overlay={overlay}
        />
        <Cardholder />
      </div>
    );
  }
}

export default App;
