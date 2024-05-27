import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TrueFalseCard from "../components/TrueFalseCard"
import { GameProgressContext } from '../contexts/GameProgressContext';
import gsap from "gsap";

const TrueFalseGame = () => {

  const facts = [
    {
      questionNumber:"1",
      text: "The Earth's climate has always been stable.",
      isWrongOrRight: false,
      ifWrong: "The Earth's climate has varied naturally over geological time scales due to factors like volcanic activity, solar radiation, and changes in greenhouse gas concentrations. However, the rapid climate change we are experiencing now is largely due to human activities.",
      ifRight: "Human activities, particularly the burning of fossil fuels and deforestation, have significantly accelerated the rate of climate change, leading to an increase in global temperatures.",
    },
    {
      questionNumber:"2",
      text: "The current warming trend is significant because it is unprecedented in scale and speed.",
      isWrongOrRight: true,
      ifWrong: "The current rate of warming is much faster than past natural changes. This rapid change is causing widespread disruptions to ecosystems, weather patterns, and sea levels.",
      ifRight: "The year 2023 was the warmest year since global records began in 1850 at 1.18°C (2.12°F) above the 20th-century average of 13.9°C (57.0°F).",
    },
    {
      questionNumber:"3",
      text: "Polar bear populations are stable and not affected by climate change.",
      isWrongOrRight: false,
      ifWrong: "Polar bear populations are declining due to the loss of sea ice habitat caused by global warming. They rely on sea ice to hunt seals, their primary food source.",
      ifRight: "Melting sea ice is not just affecting polar bears; it also impacts indigenous communities and other wildlife that depend on this habitat.",
    },
    {
      questionNumber:"4",
      text: "Rising sea levels are only a concern for island nations.",
      isWrongOrRight: false,
      ifWrong: "Rising sea levels affect coastal regions worldwide, not just island nations. Cities like Miami, New York, and Jakarta are also at risk of flooding and erosion.",
      ifRight: "About 40% of the world’s population lives within 100 kilometers of the coast, making sea level rise a global issue.",
    },
    {
      questionNumber:"5",
      text: "Increasing the use of renewable energy can help combat climate change.",
      isWrongOrRight: true,
      ifWrong: "Renewable energy sources like solar, wind, and hydroelectric power produce little to no greenhouse gas emissions compared to fossil fuels, helping to reduce the impact of climate change.",
      ifRight: "The cost of renewable energy has decreased significantly over the past decade, making it more accessible and a viable alternative to fossil fuels.",
    },
    {
      questionNumber:"6",
      text: "Planting more trees can help mitigate climate change.",
      isWrongOrRight: true,
      ifWrong: "Trees absorb carbon dioxide, a major greenhouse gas, through the process of photosynthesis, making reforestation and afforestation important strategies for mitigating climate change.",
      ifRight: "One mature tree can absorb approximately 48 pounds of carbon dioxide per year, contributing to cleaner air and reduced greenhouse gas levels.",
    },
    {
      questionNumber:"7",
      text: "All countries contribute equally to climate change.",
      isWrongOrRight: false,
      ifWrong: "Different countries contribute differently to climate change. Developed countries, especially those with high industrial activity, generally have higher greenhouse gas emissions compared to developing countries.",
      ifRight: "The top three carbon emitters—China, the United States, and India—together account for about 50% of total global emissions.",
    },
    {
      questionNumber:"8",
      text: "Climate change only affects the environment, not human health.",
      isWrongOrRight: false,
      ifWrong: "Climate change affects human health in many ways, including increased heatwaves, the spread of diseases, and food and water shortages.",
      ifRight: "The World Health Organization estimates that climate change will cause approximately 250,000 additional deaths per year between 2030 and 2050 due to malnutrition, malaria, diarrhea, and heat stress.",
    },
    {
      questionNumber:"9",
      text: "The Arctic is warming twice as fast as the rest of the planet.",
      isWrongOrRight: true,
      ifWrong: "The phenomenon known as Arctic amplification causes the Arctic to warm faster than the global average due to the loss of reflective ice and snow surfaces.",
      ifRight: "As Arctic ice melts, it exposes darker ocean water, which absorbs more heat and accelerates the warming process—a feedback loop that exacerbates global warming.",
    },
    {
      questionNumber:"10",
      text: "Climate change is the same as weather.",
      isWrongOrRight: false,
      ifWrong: "Weather refers to short-term changes in the atmosphere, while climate is the average weather over long periods. Climate change refers to long-term changes in temperature, precipitation, and other atmospheric conditions.",
      ifRight: "Understanding the difference between weather and climate is crucial for recognizing the long-term impacts of climate change on our planet",
    },
  ]

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
        <p className="m-b-[20px] text-white font-bold text-center max-w-[415px]">You will need to see 10 facts about climate change and decide what is a misconception and what is an actual fact.</p>
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
