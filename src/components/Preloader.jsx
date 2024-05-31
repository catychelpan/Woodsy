import gsap from "gsap";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import Environment1 from "../../public/loader-gallery/environment1.jpg"
//import LoggedInIcon from '../assets/logged_icon.svg?react'

const Preloader = () => {

    const positions = [
        {top:"10%", left:"0%"},
        {top:"10%", left:"10%"},
        {top:"10%", left:"60%"},
        {top:"16%", left:"15%"},
        {top:"16%", left:"40%"},
        {top:"16%", left:"90%"},
        {top:"32%", left:"50%"},
        {top:"32%", left:"75%"},
        {top:"48%", left:"0%"},
        {top:"74%", left:"30%"},
        {top:"74%", left:"50%"},
        {top:"74%", left:"90%"},
        {top:"90%", left:"20%"},
        {top:"90%", left:"70%"},
    ];

    const preloaderRef = useRef(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        
    
        gsap.set(".img", {
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0)",
        });
    
        gsap.from("p", {
          y: 40,
          ease: "power4.inOut",
          duration: 1,
          stagger: {
            amount: 0.15,
          },
          delay: 0.5,
        });
    
        gsap.to(".img", {
          scale: 1,
          width: "400px",
          height: "500px",
          stagger: 0.15,
          duration: 0.75,
          ease: "power2.out",
          delay: 1,
          onComplete: scatterAndShrink,
        });
    
        gsap.to("p", {
          top: "40px",
          duration: 1,
          stagger: {
            amount: 0.15,
          },
          ease: "power4.inOut",
          delay: 3,
          onComplete: () => {
            document.querySelector(".header").remove();
          },
        });
    
        function scatterAndShrink() {
          gsap.to(".img", {
            top: (i) => positions[i].top,
            left: (i) => positions[i].left,
            transform: "none",
            width: "155px",
            height: "180px",
            stagger: 0.075,
            duration: 0.75,
            ease: "power2.out",
            onComplete: () => setAnimationCompleted(true),
          });
        }
      }, []);


      const handleExploreClick = () => {
        gsap.to(".bg-white", {
          opacity: 0,
          duration: 0.75,
          onComplete: () => {
            navigate("/story");
          },
        });
      };

    
  return (
    <div ref={preloaderRef} className="bg-white">
        <div className="header h-full">
            <div className="text">
                <p>It is not a fiction</p>
                <div className="text-revealer"></div>
            </div> 
            <div className="text">
                <p>It is our reality</p>
                <div className="text-revealer"></div>
            </div>
        </div>

        <div className="gallery h-full">
            <div className="img">
                <Environment1 />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment2.jpg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment3.jpg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment4.jpg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment5.jpg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment6.jpg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment7.jpg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment8.jpg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment9.jpeg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment10.jpg" alt="" />
            </div>
            <div className="img">
                <img src="../../public/loader-gallery/environment11.jpg" alt="" />
            </div>
        </div>

        {animationCompleted && (
        <button className="explore-button" onClick={handleExploreClick}>
          Explore
        </button>
      )}
                
    </div>        
  )
}

export default Preloader
