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
                <div className="questionLines1">How do I play this game?</div>
                <div className="questionLines2">Click each image only once! Try to remember which ones you've already clicked on. The max score you can achieve is 12. Try to beat your current best!</div>
                <div className="questionLines1">Is there a harder version?</div>
                <div className="questionLines2">That's currently in development! I'll link a harder version once it's completed.</div>
                <div className="questionLines1">Who are you?</div>
                <div className="questionLines2">I'm a self-taught software engineer making apps with the goal of assisting people in daily tasks and/or creating entertainment! You can find more of my projects <a href="https://github.com/JeffLi117">here</a>.</div>
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