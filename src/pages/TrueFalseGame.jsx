import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TrueFalseCard from "../components/TrueFalseCard"
import { GameProgressContext } from '../contexts/GameProgressContext';
import gsap from "gsap";
import {facts} from "../data";

const TrueFalseGame = () => {

  

  const [unansweredCards, setUnansweredCards] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [currentCard, setCurrentCard] = useState(unansweredCards[0]);
  const { handleGameCompletion } = useContext(GameProgressContext);
  const navigate = useNavigate();
  const trueFalseRef = useRef();

//for smooth transition into the page
  useEffect(() => {
    gsap.from(trueFalseRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);


  const navigateAndScroll = () => {
    navigate("/story");
    setTimeout(() => {
      const gameSection = document.getElementById("gameSection");
      if (gameSection) {
        gameSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay for smoother scroll
  };


  //also add animation to switch to the next card
  function handleNextCard(gotItRight) {

    setUnansweredCards((prevUnansweredCards) => {
      let updatedUnansweredCards = [...prevUnansweredCards];
      const currentIndex = updatedUnansweredCards.indexOf(currentCard);

      if (gotItRight) {
        updatedUnansweredCards.splice(currentIndex, 1);
        if (updatedUnansweredCards.length === 0) {
          handleGameCompletion("trueFalseGame");
          //redirect to the landing
          navigateAndScroll();
          
        }else{
          const nextIndex = currentIndex === updatedUnansweredCards.length ? 0 : currentIndex;
          setCurrentCard(updatedUnansweredCards[nextIndex]);
        }
        
      }else{
        const nextIndex = currentIndex === updatedUnansweredCards.length - 1 ? 0 : currentIndex + 1;
        setCurrentCard(updatedUnansweredCards[nextIndex]);
      }

      
      
      return updatedUnansweredCards;
    });

 
  }



  return (
    <div ref={trueFalseRef} className="bg-primary flex">
      <div className="px-[30px] w-[48%] justify-center h-[100vh] flex flex-col items-center gap-8 bg-primary_light rounded-3xl">
        <h1 className="max-w-xl text-white text-center font-bold text-4xl leading-[120%]">True or False</h1>
        <p className="tracking-widest m-b-[20px] text-white font-bold text-center max-w-[415px]">You will need to see 10 facts about climate change and decide what is a misconception and what is an actual fact.</p>
        <img src="../../public/TrueFalse/TrueFalseCharacter.svg" alt="Check Caharcter" />
      </div>

      <div className="px-[20px] w-[52%] justify-center flex flex-col items-center gap-8">
          <TrueFalseCard
            questionNumber={facts[currentCard].questionNumber}
            text={facts[currentCard].text}
            isWrongOrRight={facts[currentCard].isWrongOrRight}
            ifWrong={facts[currentCard].ifWrong}
            ifRight={facts[currentCard].ifRight}
            onNextClick={handleNextCard}
          />
      </div>
      
    </div>
  )
}

export default TrueFalseGame
