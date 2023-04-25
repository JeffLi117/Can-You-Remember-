import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Overlay({handlerOverlay, overlay}) {

  function handleQBoxToggle() {
    handlerOverlay();
  }

  if (overlay) {
      return (
          <div>
              <div className="iconQ">
                  <FontAwesomeIcon 
                      icon={faCircleXmark}
                      onClick={handleQBoxToggle}
                  />
              </div>
              <div className="overlayContent">
                <div className="questionLines">How do I play this game?</div>
                <div className="questionLines">Click each image only once! Try to remember which ones you've already clicked on. The max score you can achieve is 12. Try to beat your current best!</div>
                <div className="questionLines">Is there a harder version?</div>
                <div className="questionLines">That's currently in development! I'll link a harder version once it's completed.</div>
                <div className="questionLines">Who are you?</div>
                <div className="questionLines">I'm a self-taught software engineer making apps with the goal of assisting people in daily tasks and/or creating entertainment! You can find more of my projects <a href="https://github.com/JeffLi117">here</a></div>
              </div>
          </div>
        )
  } else {
      return (
          <div>
              <div className="iconQ">
                  <FontAwesomeIcon 
                      icon={faCircleQuestion}
                      onClick={handleQBoxToggle}
                  />
              </div>
          </div>
        )
  }
}

export default Overlay