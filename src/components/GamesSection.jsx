import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import GameCard from './GameCard';
gsap.registerPlugin(ScrollTrigger);

function GamesSection() {

    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);
    const title1 = useRef(null);
    const title2 = useRef(null);
    const parallaxRef = useRef(null);

    

    useEffect(() => {
          
          const cards = [card1, card2, card3];
          cards.forEach((cardRef) => {

            
            gsap.to(cardRef.current, {

              opacity: 1,
              y: -50, 
              scrollTrigger: {
                trigger: cardRef.current,
                start: 'top 70%', 
                end: 'top 40%', 
                scrub: true,
                
              }
            });


          });
        }
      , []);

  const handlePlayClick = (gameName) => {

    switch (gameName) {
      case 'Game 1':
        window.location.href = "/true-false-game"; 
        break;
      case 'Game 2':
        window.location.href = "/find-impact-game"; 
        break;
      case 'Game 3':
        window.location.href = "/trash-sorting-game";
        break;
      default:
        // Handle default case
        break;
    }

  }
  return (
    <div ref={parallaxRef} className="bg-secondary rounded-t-[100px] max-h-[1330px]">
        <h1 ref={title1} className="z-0  font-bold text-[300px] pt-[450px] mt-[100px] mr-[50px] text-right leading-[100%] text-primary_light">SAVE THE</h1>
        <h1 ref={title2} className="z-0  font-bold text-[300px] mt-[10px] mr-[50px] text-right leading-[100%] text-primary_light">WOOD</h1>
        <GameCard ref={card1} styles={"bottom-[840px] left-[26%]"} gameName={"True or False"} handlePlayClick={() => handlePlayClick("Game 1")}/>
        <GameCard ref={card2} styles={"bottom-[850px] left-[65%]"} gameName={"Sort It Out"} handlePlayClick={() => handlePlayClick("Game 3")}/>
        <GameCard ref={card3} styles={"bottom-[950px] left-[20%]"} gameName={"Find Impact"} handlePlayClick={() => handlePlayClick("Game 2")}/>
    </div>
  )
}

export default GamesSection
