/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

const TrueFalseCard = ({questionNumber, text, isWrongOrRight, ifWrong, ifRight, onNextClick}) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [isFlipAllowed, setIsFlipAllowed] = useState(false)
    const [isAnsweredRight, setIsAnsweredRight] = useState(false)


    
    //states to render the card content based on whether the user answered right or wrong
    const [resultText, setResultText] = useState(ifRight);
    const [resultImage, setResultImage] = useState('');

    useEffect(() => {
        setIsFlipAllowed(false)
        setIsAnsweredRight(false)
    },[questionNumber])

    

    function handleFlip() {

        if (isFlipAllowed && !isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
          }
        
    }

    function checkAnswer(answer) {

        setIsFlipAllowed(true)
        

        if (answer === isWrongOrRight){
            
            setResultText(ifRight)
            setResultImage('../../public/TrueFalse/check-sign.svg')
            setIsAnsweredRight(true);

        }else {

            setResultText(ifWrong)
            setResultImage('../../public/TrueFalse/cross-sign.svg')

        }

        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }

    }



    const invokeNextClick = () => {
        
        onNextClick(isAnsweredRight);
    }

  return (
    <div onClick={handleFlip} className="rounded-[30px] flip-card flex items-center justify-center  h-[630px] w-[520px] cursor-pointer">
        <motion.div 
        className='flip-card-inner w-[100%] h-[100%]' 
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{duration: 0.6, animationDirection: "normal"}}
        onAnimationComplete={() => {setIsAnimating(false)}}>

            <div className="flip-card-front h-full rounded-[30px] bg-secondary flex flex-col items-center justify-center gap-9 px-[60px] py-[80px]">
                <h1 className="max-w-xl text-black text-center font-bold text-[65px] leading-[120%]">Fact # {questionNumber}</h1>
                <p className="text-[20px] text-center leading-[120%]">{text}</p>
                <div className="flex gap-6 mt-[200px]">
                    <button onClick={() => checkAnswer(true)} className="py-[22px] rounded-xl px-[35px] bg-primary text-[30px] font-bold text-primary_light">TRUE</button>
                    <button onClick={() => checkAnswer(false)} className="py-[22px] rounded-xl px-[35px] bg-[#DD471A] text-[30px] font-bold text-[#FB9C7F]">FALSE</button>
                </div>
                
            </div>

            <div className="flip-card-back h-full rounded-[30px] bg-primary_light flex flex-col items-center justify-center gap-9 px-[60px] py-[80px]">
                <img src={resultImage} alt="" />
                <p className="text-[20px] text-white text-center leading-[120%]">{resultText}</p>
                <button className="py-[22px] rounded-xl px-[35px] border-2 border-white text-[30px] font-bold text-white" onClick={invokeNextClick}>NEXT</button>
                
            </div>
            

        </motion.div>
      
    </div>
  )
}

export default TrueFalseCard
