import TrueFalseCard from "../components/TrueFalseCard"
const TrueFalseGame = () => {

  const facts = [
    {
      questionNumber:"1",
      text: "All countries contribute equally to climate change.",
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
  ]

  let currentCard = 0;
  const unansweredCards = [0,1,2,3,4,5,6,7,8,9];

  function handleNextCard(gotItRight) {
    //if for the previous user answered in the right way -> 
    //delete the index of that question from array

    //change curent card to the index of the one after 
    //if it was already the last index -> set it back to refer to the current 0-indexed element

    //if there are no more elements in the unanswered array -> set game won to true
    //and redirect to the landing 

  }

  return (
    <div className="bg-primary flex">
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
        IfRight={facts[currentCard].ifRight} />
      </div>
      
    </div>
  )
}

export default TrueFalseGame
