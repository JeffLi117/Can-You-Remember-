import React from 'react'

function EachCard({card, ID, cardClick}) {

    function handleCardClick() {
        cardClick(ID);
    }
  return (
    <div className="EachCard" onClick={handleCardClick} >
        <img src={card} alt="pokemon" />
    </div>
  )
}

export default EachCard