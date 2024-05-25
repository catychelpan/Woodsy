import Parallax from "../components/Parallax"
import CharacterHeroSection from "../components/CharacterHeroSection"
import GamesSection from "../components/GamesSection"
import { useEffect, useRef } from "react"
import gsap from "gsap";


const Landing = () => {

  const landingRef = useRef(null);

  useEffect(() => {
    gsap.from(landingRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  

  return (

    <div ref={landingRef}>
      <Parallax />
      <CharacterHeroSection />
      <GamesSection />
    </div>
    
      
    
  )
}

export default Landing
