import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react";
import gsap from "gsap";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableWasteItem from "../components/DraggableWasteItem";
import DroppableWasteContainer from "../components/DroppableWasteContainer";
import { GameProgressContext } from '../contexts/GameProgressContext';
import { wasteItems } from "../data";
import axios from "../network/axios";

const TrashSortingGame = () => {

  const trueFalseRef = useRef();
  const navigate = useNavigate();
  const { handleGameCompletion } = useContext(GameProgressContext);

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  //const wasteItems = wasteItems;

  //for smooth transition into the page
    useEffect(() => {
      gsap.from(trueFalseRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, []);


    const markAsPassed = async () => {
      try {
        const token = localStorage.getItem("access_token");
        await axios.put('/api/quizzes/update-status/', { title: "trashSortingGame", passed: true }, { headers: { Authorization: `Bearer ${token}` } })
        handleGameCompletion("trashSortingGame");
        navigateAndScroll();
      } catch (error) {
        console.log(error);
      }
    }
  
  
    const navigateAndScroll = () => {
      navigate("/story");
      setTimeout(() => {
        const gameSection = document.getElementById("gameSection");
        if (gameSection) {
          gameSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay for smoother scroll
    };


    const handleEndDrag = async (event) => {
      
      const {destination, source} = event;

      if (!destination) {
        return;
      }

      if (destination.droppableId === source.draggableId) {
        return;
      }

      //check if drag was valid and execute logic based on this:
      const validDestination = wasteItems[currentItemIndex].relevantContainer;

      if (validDestination === destination.droppableId) {
        
        //true: 
        //check if it was the last index
        if (currentItemIndex == (wasteItems.length - 1)) {
          await markAsPassed()
        } else {
          //change state of current index onto next
          setCurrentItemIndex(currentItemIndex + 1);
        }

      }else {
        //false:
        //return element back to its container
        //shake animation for bin container
        return;

      }
      
    }


    

  return (
    <DragDropContext onDragEnd={(event) => handleEndDrag(event)}>

      <div ref={trueFalseRef} className="bg-primary flex">


        <div className="lg:px-[20px] px-[30px] w-[38%] justify-center h-[100vh] flex flex-col items-center gap-11 bg-primary_light rounded-3xl">
          <h1 className="max-w-xl text-white text-center font-bold text-4xl leading-[120%]">Sort It Out</h1>
          <p className="m-b-[20px] tracking-widest text-white font-bold text-center max-w-[415px]">you have different items and 3 containers. drag and drop items into relevant containers based on how they should be recycled or composted.</p>
          <img src="../../public/WasteSorting/WasteSortingCharacter.svg" alt="Recycle Caharcter" />
        </div>



        <div className=" px-[20px] w-[62%] pt-[60px] flex flex-col items-center gap-8">


          <Droppable droppableId="waste-item-container">
                
            {(provided) => (

              <div {...provided.droppableProps} ref={provided.innerRef} className="mb-[170px] xl:mb-[120px] 2xl:mb-[100px] max-w-[425px] 2xl:h-[310px] h-[300px] bg-white rounded-[30px] px-[50px] pt-[40px] pb-[20px]">

              <DraggableWasteItem
                itemIndex={wasteItems[currentItemIndex].index} 
                itemName={wasteItems[currentItemIndex].itemName}
                itemImage={wasteItems[currentItemIndex].itemImage} 
              />
              {provided.placeholder}

              </div>
                        
            )}

          </Droppable>



          <div className="max-w-[1040px] gap-[20px] md:gap-[25px] xl:gap-[50px] 2xl:gap-[70px] max-h-[394px] flex">

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
