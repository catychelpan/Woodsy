import { Droppable } from "react-beautiful-dnd";
/* eslint-disable react/prop-types */
const DroppableWasteContainer = ({recycleType}) => {
    //will be a swithch to return different svg-components
    switch(recycleType){
        case "landfill":
            return(

                <Droppable droppableId={recycleType}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <img src="../../public/WasteSorting/landfill-bin.svg" alt="landfill bin" />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                
            );
            
        case "recycling":
            return(

                <Droppable droppableId={recycleType}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <img src="../../public/WasteSorting/recycling-bin.svg" alt="landfill bin" />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                
            )
        case "compost":
            return(

                <Droppable droppableId={recycleType}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <img src="../../public/WasteSorting/compost-bin.svg" alt="landfill bin" />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

 
            )
        
    }

}

export default DroppableWasteContainer
