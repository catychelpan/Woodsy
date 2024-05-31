import React, { useState, useEffect} from "react"
import PropTypes from 'prop-types'



export const GameProgressContext = React.createContext()

export const GameProgressProvider = ({children}) => {


 
    const [gameProgress, setGameProgress] = useState({
        "trueFalseGame":false,
        "trashSortingGame":false,
        "findImpactGame":false,
    });

    

    const handleGameCompletion = (game) => {


        setGameProgress((prevState) => ({
          ...prevState,
          [game]: true,
        }));
        
      };

    useEffect(() => {
      console.log("Game progress updated:", gameProgress);
    }, [gameProgress]);


    return <GameProgressContext.Provider value={{gameProgress,handleGameCompletion}}>{children}</GameProgressContext.Provider>

}

GameProgressProvider.propTypes = {
    children: PropTypes.element.isRequired,
  }

  