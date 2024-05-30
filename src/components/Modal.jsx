/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {X} from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameProgressContext } from '../contexts/GameProgressContext';
import { details } from '../data';


function Modal({pairIndex, onClose, counterState}) {

    

    const navigate = useNavigate();
    const {handleGameCompletion} = useContext(GameProgressContext);
    const [isRedirect, setIsRedirect] = useState(false);


    const navigateAndScroll = () => {
        navigate("/story");
        setTimeout(() => {
          const gameSection = document.getElementById("gameSection");
          if (gameSection) {
            gameSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Delay for smoother scroll
      };

      
    useEffect(() => {
        if (isRedirect) {
          handleGameCompletion("findImpactGame");
          navigateAndScroll();
        }
    }, [isRedirect, handleGameCompletion, navigateAndScroll]);


    useEffect(() => {
        if (counterState === 5) {
            setIsRedirect(true);
        }
    }, [counterState]);


    const hide = () => {
        
        onClose(false)
    }

    

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="w-[500px] bg-white rounded-3xl px-[60px] pt-8 pb-[50px] border-primary border-4">
                <div className='flex justify-end mb-[20px]'>
                    <button onClick={hide}><X size={30}/></button>
                </div>
                <h1 className="mb-[5px] text-primary font-bold border-primary border-2 text-[20px] rounded-[30px] py-1 px-4">Action:</h1>
                <p className="text-primary_light text-center mb-[20px] font-bold">{details[pairIndex].action}</p>
                <h1 className="mb-[5px] text-primary font-bold border-primary border-2 text-[20px] rounded-[30px] py-1 px-4">Impact:</h1>
                <p className="text-primary_light text-center font-bold mb-[20px]">{details[pairIndex].impact}</p>
                <h1 className="text-primary text-center font-bold  text-[20px] rounded-[30px] py-1 px-4">Description:</h1>
                <p className="text-center tracking-wide mb-[20px]">{details[pairIndex].description}</p>
                <h1 className="text-primary text-center font-bold  text-[20px] rounded-[30px] py-1 px-4">Resources:</h1>
                {details[pairIndex].resources.map((link, index) => (
                    <li key={index}><a className="underline text-primary_light" target="_blank" href={link}>Resource {index+1}</a></li>
                ))}
            </div>
        </div>
  )
}

export default Modal
