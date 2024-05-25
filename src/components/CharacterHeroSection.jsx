/* eslint-disable react/no-unescaped-entities */
import Paragraph from '../components/Paragraph'
import {useRef, useEffect} from 'react'
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);



const CharacterHeroSection = () => {

    const speach1 = useRef(null);
    const speach2 = useRef(null);
    const spirit = useRef(null);
    const magicalItems = useRef(null);


    useEffect(() => {

        gsap.to(speach1.current, {

            opacity: 1,
            y: -50, 
            scrollTrigger: {
              trigger: speach1.current,
              start: 'top 70%', 
              end: 'top 30%', 
              scrub: true,
              
            }
          });

        gsap.to(speach2.current, {

            opacity: 1,
            y: -50, 
            scrollTrigger: {
              trigger: speach2.current,
              start: 'top 70%', 
              end: 'top 30%', 
              scrub: true,
              
            }
        });

        gsap.to(magicalItems.current, {

            opacity: 1,
            y: -20, 
            scrollTrigger: {
              trigger: magicalItems.current,
              start: 'top 70%', 
              end: 'top 20%', 
              scrub: true,
              
            }
        });

        gsap.to(spirit.current, {

            opacity: 1,
            scale:1,
  
             
            scrollTrigger: {
              trigger: spirit.current,
              start: 'top 80%', 
              end: 'top 40%', 
              scrub: true,
              
            }
        });


        
            
        }
      , []);

    

    const paragraph = "play the following games. One win gives you One magical item. to save the forest gather all three items!"
  return (
    <div className="bg-[#2B5C5C] pt-[200px] pb-[400px]">
        <div className="lg:z-0 flex flex-col gap-[100px] items-center justify-center">
            <h1 className="lg:font-bold text-5xl text-center text-primary_light">Hi, I'm Woodsy</h1>
            <img ref={spirit} width={546} className="opacity-0 rotate-180 -scale-50" src="../../public/landing/WoodsySpirit.png" alt="Woodsy Spirit" />
        </div>
s
        <img ref={speach1} className="opacity-0 lg:z-5 relative left-[65%] bottom-[580px]" src="../../public/landing/Speech1.svg" />
        <img ref={speach2} className="opacity-0 lg:z-5 relative left-[15%] bottom-[710px]" src="../../public/landing/Speech2.svg" />

        <div ref={magicalItems} className="opacity-0 lg:w-[450px] flex z-5 gap-5 relative bottom-[720px] left-[15%]">
            <img src="../../public/landing/SpellsItem.svg" alt="" />
            <img src="../../public/landing/ElixirItem.svg" alt="" />
            <img src="../../public/landing/GlobeItem.svg" alt="" />
        </div>

        <div className="lg:z-6 -mt-[25rem] text-center items-center flex justify-center">
            {/*<Paragraph value={paragraph} />*/}
            <Paragraph value={paragraph}/>
        </div>
            
      
    </div>
  )
}

export default CharacterHeroSection
