import React, { useState } from 'react';
import Bulbasaur from './images/Bulbasaur.png';
import Venusaur from './images/Venusaur.png';
import Charizard from './images/Charizard.png';
import Charmander from './images/Charmander.png';
import Mr_Mime from './images/Mr_Mime.png';
import Cubone from './images/Cubone.png';
import Jigglypuff from './images/Jigglypuff.png';
import Kadabra from './images/Kadabra.png';
import Meowth from './images/Meowth.png';
import Pikachu from './images/Pikachu.png';
import Psyduck from './images/Psyduck.png';
import Squirtle from './images/Squirtle.png';
import uniqid from "uniqid";
import EachCard from './EachCard';

function Cardholder({noClick}) {
    
    const monsWithoutID = [Bulbasaur, Venusaur, Charizard, Charmander, Mr_Mime, Cubone, Jigglypuff, Kadabra, Meowth, Pikachu, Psyduck, Squirtle];
    const monsWithID = monsWithoutID.map(img => [img, uniqid()]);
    /* create array of arrays (img as index 0, unique ID as 1) */
    const [current, setCurrent] = useState(0);
    const [best, setBest] = useState(0);
    const [cards, setCards] = useState(monsWithID);
    const [clickedOn, setClickedOn] = useState([]);

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    
    function cardClick(ID) {
        console.log("this is from the card", ID);
        console.log(clickedOn);
        if (!clickedOn.includes(ID)) {
            setCurrent((current + 1));
            setClickedOn(oldArray => [...oldArray, ID]);
            setCards(shuffle(cards));
        } else {
            if (current > best) {
                setBest(current);
            }
            setCurrent(0);
            setClickedOn([]);
            setCards(shuffle(cards));
        }
    }

    /* const cardClick = (e) => {
        if (e.target.closest("div").className === "EachCard") {
            console.log("clicking on the Pokemon!");
            Need to get card's ID into here and then create my 
            if it contains, setCurrent + 1
            if not, to 0 
            also need to change best score if need be, etc etc 
        }
    }

    useEffect(() => {

        

        console.log("Something changed while watching current score");
        document.addEventListener("click", cardClick);

        return () => {
            document.removeEventListener("click", cardClick);
        };

    }, [current]) */

    /* function saveJobInfo(obj) {
        console.log("saving");
        let foundJob = totalJobs.findIndex(el => el.ID === obj.ID);
        //Make a shallow copy of the items
        let totalJobsCopy = [...totalJobs];
        //Make a shallow copy of the item you want to mutate
        let item = {...totalJobsCopy[foundJob]};
        //Replace the property you're intested in
        item.comp = obj.comp;
        item.title = obj.title;
        item.tasks = obj.tasks;
        item.startDate = obj.startDate;
        item.endDate = obj.endDate;
        item.ID = obj.ID;
        //Put it back into our array. N.B. we *are* mutating the array here, 
        //but that's why we made a copy first
        totalJobsCopy[foundJob] = item;
        //Set the state to our new copy
        setTotalJobs(totalJobsCopy);
    } */

    /* function handleClick(e) {
        if (e.target.closest("div").className === "EachCard") {
            console.log("clicking on the Pokemon!");
        }
    } 
    useEffect(() => {
        const changeCardsOnClick = () => {

        };


    }) */
    if (noClick) {
        return (
            <div className="scoreAndCards noClick grayed">
                <div className="bestScore">Best Score: {best}</div>
                <div className="currentScore">Current Score: {current}</div>
                <div className="Cardholder" /* onClick={handleClick} */>
                    <ul>
                        {cards.map((card) => {
                            return (
                                <EachCard 
                                    card={card[0]}
                                    key={card[1]}
                                    ID={card[1]}
                                    cardClick={cardClick}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div className="scoreAndCards">
                <div className="bestScore">Best Score: {best}</div>
                <div className="currentScore">Current Score: {current}</div>
                <div className="Cardholder" /* onClick={handleClick} */>
                    <ul>
                        {cards.map((card) => {
                            return (
                                <EachCard 
                                    card={card[0]}
                                    key={card[1]}
                                    ID={card[1]}
                                    cardClick={cardClick}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
  
}

export default Cardholder