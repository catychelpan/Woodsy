import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableWasteItem from "../components/DraggableWasteItem";
import DroppableWasteContainer from "../components/DroppableWasteContainer";

const TrashSortingGame = () => {

  const trueFalseRef = useRef();
  const navigate = useNavigate();

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const wasteItems = [
    {
      index: 0,
      itemName: "Egg Shell",
      itemImage: "../../public/WasteSorting/Compost/egg-shell.png",
      relevantContainer: "compost",
    },
    {
      index: 1,
      itemName: "Ceramics",
      itemImage: "../../public/WasteSorting/Landfill/ceramics.png",
      relevantContainer: "landfill",
    },
  ];

  //for smooth transition into the page
    useEffect(() => {
      gsap.from(trueFalseRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, []);
  
  
    const navigateAndScroll = () => {
      navigate("/story");
      setTimeout(() => {
        const gameSection = document.getElementById("gameSection");
        if (gameSection) {
          gameSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay for smoother scroll
    };


    const handleEndDrag = () => {
      //check if drag was valid and execute logic based on this:\

      //true: 
      //hide element at current index
      //change state of current index onto next (check if it was the last index)

      //false:
      //return element back to its container
      //shake animation for bin container
    }

  return (
    <DragDropContext onDragEnd={handleEndDrag}>

      <div ref={trueFalseRef} className="bg-primary flex">


        <div className="px-[20px] w-[38%] justify-center h-[100vh] flex flex-col items-center gap-11 bg-primary_light rounded-3xl">
          <h1 className="max-w-xl text-white text-center font-bold text-4xl leading-[120%]">Sort It Out</h1>
          <p className="m-b-[20px] tracking-widest text-white font-bold text-center max-w-[415px]">you have different items and 3 containers. drag and drop items into relevant containers based on how they should be recycled or composted.</p>
          <img src="../../public/WasteSorting/WasteSortingCharacter.svg" alt="Recycle Caharcter" />
        </div>



        <div className="px-[20px] w-[62%] justify-center flex flex-col items-center gap-8">


          <Droppable droppableId="waste-item-container">
                
            {(provided) => (

              <div {...provided.droppableProps} ref={provided.innerRef} className="mb-[40px] max-w-[425px] max-h-[360px] bg-white rounded-[30px] px-[50px] pt-[40px] pb-[20px]">

              <DraggableWasteItem
                itemIndex={wasteItems[currentItemIndex].index} 
                itemName={wasteItems[currentItemIndex].itemName}
                itemImage={wasteItems[currentItemIndex].itemImage} 
                relevantContainer={wasteItems[currentItemIndex].relevantContainer}
              />
              {provided.placeholder}

              </div>
                        
            )}

          </Droppable>



          <div className="max-w-[1040px] flex">

            <DroppableWasteContainer recycleType={"landfill"}/>
            <DroppableWasteContainer recycleType={"recycling"}/>
            <DroppableWasteContainer recycleType={"compost"}/>
    
          </div>
            
            
        </div>


        
      </div>
    </DragDropContext>
  )
}

export default TrashSortingGame
