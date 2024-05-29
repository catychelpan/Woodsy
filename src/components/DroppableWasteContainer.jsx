import { Droppable } from "react-beautiful-dnd";
/* eslint-disable react/prop-types */

const DroppableWasteContainer = ({ recycleType }) => {
  const binImages = {
    landfill: {
      bin: "../../public/WasteSorting/landfill-bin.svg",
      lid: "../../public/WasteSorting/landfill-lid.svg"
    },
    recycling: {
      bin: "../../public/WasteSorting/recycling-bin.svg",
      lid: "../../public/WasteSorting/recycling-lid.svg"
    },
    compost: {
      bin: "../../public/WasteSorting/compost-bin.svg",
      lid: "../../public/WasteSorting/compost-lid.svg"
    }
  };

  return (
    <Droppable droppableId={recycleType}>
      {(provided, snapshot) => (
        <div 
          {...provided.droppableProps} 
          ref={provided.innerRef} 
          className="h-[200px] w-[100px] relative flex justify-center items-end"
        >

            <img 
                src={binImages[recycleType].lid} 
                alt={`${recycleType} lid`} 
                className={`lg:max-w-[245px] relative bottom-[135%] transform transition-transform duration-300 ${snapshot.isDraggingOver ? 'rotate-45' : 'rotate-0'}`}
                
            />
            <img 
                src={binImages[recycleType].bin} 
                alt={`${recycleType} bin`} 
                className="lg:max-w-[245px] absolute bottom-0"
                
            />
          
            {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default DroppableWasteContainer;