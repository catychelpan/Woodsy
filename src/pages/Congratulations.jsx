import { useEffect, useRef } from "react";
import gsap from "gsap";

const Congratulations = () => {

  const congratulationsRef = useRef(null);

  useEffect(() => {
    gsap.from(congratulationsRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={congratulationsRef}>
      <h1>Congratulations</h1>
      <img src="../../public/woodsylogo.svg" alt="" />
    </div>
  )
}

export default Congratulations
