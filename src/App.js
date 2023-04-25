import './App.css';
import Title from './components/Title';
import Overlay from './components/Overlay';
import Cardholder from './components/Cardholder';
import SideBackground from './components/SideBackground';
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
        <SideBackground first="first" noClick="noClick" />
        <Overlay 
          handlerOverlay={handlerOverlay} 
          overlay={overlay}
        />
        <SideBackground second="second" noClick="noClick"  />
        <Cardholder noClick="noClick" />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Title/>
        <SideBackground first="first" />
        <Overlay 
          handlerOverlay={handlerOverlay} 
          overlay={overlay}
        />
        <SideBackground second="second"  />
        <Cardholder />
      </div>
    );
  }
}

export default App;
