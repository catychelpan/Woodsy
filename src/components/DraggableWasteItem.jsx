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
                className="bg-white h-[230px] w-[200px] border-[black] border-2 pt-4 rounded-xl cursor-pointer flex flex-col justify-center items-center"
            >
                <h2 className="font-bold text-black text-sm">{itemName}</h2>
                <img className="2xl:max-w-[145px] max-w-[135px]" src={itemImage} alt={itemName} />
            </div>

        )}

    </Draggable>
    
  );
}

export default DraggableWasteItem
