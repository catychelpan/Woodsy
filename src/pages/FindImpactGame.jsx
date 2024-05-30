import { useEffect, useRef } from "react";

import gsap from "gsap";
import FlowPanel from "../components/FlowPanel";
const FindImpactGame = () => {


  const findImpactRef = useRef();

  //for smooth transition into the page
  useEffect(() => {
    gsap.from(findImpactRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  

  return (
    <div ref={findImpactRef} className="bg-primary flex">
      <div className="lg:px-[20px] px-[30px] w-[40%] justify-center h-[100vh] flex flex-col items-center gap-11 bg-primary_light rounded-3xl">
          <h1 className="max-w-[370px] text-white text-center font-bold text-4xl leading-[120%]">Find Impact</h1>
          <p className="lg:mb-[40px] mb-[20px] tracking-widest text-white font-bold text-center max-w-[415px]">match daily actions or habits with their corresponding environmental impacts. Each valid pair will provide more detailed information about the connection and additional resources for further reading.</p>
          <img className="lg:w-[50%]" src="../../public/FindImpact/FindImpactCharacter.svg" alt="Impact Caharcter" />
      </div>

      <div className="lg:px-[20px] px-[30px] w-[60%] justify-center h-[100vh] flex flex-col items-center gap-11  rounded-3xl">
        <FlowPanel />
      </div>
    </div>
  )
}

export default FindImpactGame
