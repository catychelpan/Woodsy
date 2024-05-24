import Parallax from "../components/Parallax"
import CharacterHeroSection from "../components/CharacterHeroSection"
import GamesSection from "../components/GamesSection"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis/types"

const Landing = () => {

  useEffect(() => {
    const lenis = new Lenis({
      smooth:true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };

  }, [])

  return (

    <>
      <Parallax />
      <CharacterHeroSection />
      <GamesSection />
    </>
    
      
    
  )
}

export default Landing
