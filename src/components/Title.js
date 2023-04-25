import React from 'react';
import pokeball from './pokeball.png';

function Title({noClick}) {

  if (noClick) {
    return (
      <div className="title noClick grayed" >
        <div>Pokémon Memory!</div>
        <img src={pokeball} alt="pokeball" className="title_img" />
      </div>
  
    )
  } else {
    return (
      <div className="title" >
        <div>Pokémon Memory!</div>
        <img src={pokeball} alt="pokeball" className="title_img" />
      </div>
  
    )
  }
  
}

export default Title