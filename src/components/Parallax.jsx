import gsap from "gsap";
import { useEffect, useRef, useState } from "react"
import ScrollTrigger from "gsap/src/ScrollTrigger";

function Parallax() {

    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const forest = useRef(null);
    const grass = useRef(null);
    const flames = useRef(null);
    const intro = useRef(null);
    const title = useRef(null);
    const birds = useRef(null);

    useEffect(() => {
      let ctx = gsap.context(() => {
        //all GSAP animation goes here
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline({
          defaults: {duration: 1},
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "top top",
            end: "5500 bottom",
            scrub: true,
            pin: true,
            onUpdate: (self) => {
              setBackground(Math.ceil(self.progress * 100 + 20))
            },
          },
        });

        tl.to(
          mountain2.current,
          {
            y: "+=100",
            opacity:0.5
          },
          0
        );
        tl.to(
          mountain1.current,
          {
            y: "-=50",
          },
          0
        );
        tl.to(
          forest.current,
          {
            y: "+=50",
            opacity:0.7
          },
          0.5
        );
        tl.to(
          grass.current,
          {
            y: "+=20",
            
          },
          0.2
        );
        tl.to(
          flames.current,
          {
            y: "-=20",
            opacity:1
          },
          0.8
        );
        tl.to(
          intro.current,
          {
            y: "-=990",
            opacity:1
          },
          0
        );
        tl.to(
          title.current,
          {
            y: "-=990",
            opacity:1
          },
          0.5
        );
        
      })

      return () => ctx.revert();
    }, [])



  return (
    <div className="parallax-outer">
        <div ref={parallaxRef} style={{ background: `linear-gradient(#61B0BA, #fef8e4 ${background}%, #fef8e4, #2f8994 )` }} className="parallax">

            <img ref={mountain1} className="mountain-1" src="../../public/forest/mountain1.svg" alt="mountain1" />
            <img ref={mountain2} className="mountain-2" src="../../public/forest/mountain3.svg" alt="mountain2" />
            <img ref={forest} className="forest" src="../../public/forest/forest.png" alt="forest" />
            <img id="grass" ref={grass} className="forest" src="../../public/forest/grass.svg" alt="grass" />              
            <img ref={flames} className="flames" src="../../public/forest/flames.svg" alt="flames"/>
            
            
            <h2 className="intro" ref={intro} >once, on a beautifual and peacful day</h2>
            <h1 id="title" className="intro" ref={title}>A horrific disaster happend in the forest</h1>
            
            
            

        </div>
      
    </div>
  )
}

export default Parallax
