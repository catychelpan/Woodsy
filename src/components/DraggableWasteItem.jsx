import { Draggable } from "react-beautiful-dnd"

/* eslint-disable react/prop-types */


const DraggableWasteItem = ({itemIndex, itemName, itemImage, relevantContainer}) => {
    
  return (
    <Draggable draggableId={itemName} index={itemIndex}>
        {(provided) => (

            <div 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref={provided.innerRef} 
                className="bg-primary_light pt-4 rounded-xl cursor-pointer flex flex-col justify-center items-center"
            >
                <h2 className="font-bold text-white text-base">{itemName}</h2>
                <img className="max-w-[205px]" src={itemImage} alt={itemName} />
            </div>

        )}

    </Draggable>
    
  );
}

export default DraggableWasteItem
