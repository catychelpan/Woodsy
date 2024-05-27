/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, {useContext} from 'react';
import { GameProgressContext } from '../contexts/GameProgressContext';


const GameCard = React.forwardRef(({styles, gameName, handlePlayClick, gameProgressName, wonItem}, ref) => {

  const {gameProgress} = useContext(GameProgressContext);
  const isGameCompleted = gameProgress[gameProgressName];

  //here we should check the state of the game with the help of the context
  //and based on this render a bit different game component

  if (!isGameCompleted) {

    return (
      <div ref={ref} className={`opacity-0 h-min-[350px] relative lg:w-[20%] ${styles} shadow-2xl z-10 bg-[#1C4444] w-[40%] py-[50px] px-[44px] justify-center rounded-3xl items-center flex flex-col gap-[40px]`}>
          <h1 className="text-[45px] text-center font-bold text-white">{gameName}</h1>
          <button className="w-[80%] transition-colors hover:bg-primary border-2 border-white rounded-[40px] bg-primary_light text-white text-xl py-[15px]" onClick={handlePlayClick}>play</button>
      </div>
    );

  }else {
    return (
      <div ref={ref} className={`opacity-0 h-min-[350px] relative lg:w-[20%] ${styles} shadow-2xl z-10 bg-[#1C4444] w-[40%] py-[50px] px-[44px] justify-center rounded-3xl items-center flex flex-col gap-[40px]`}>
          <h1 className="text-[45px] text-center font-bold text-white">YOU DID IT!</h1>
          <img src={wonItem} alt="Won item" className="w-[132px] h-[132px]" />
          
      </div>
    );
  }
 
});

export default GameCard;
