
import 'reactflow/dist/style.css';
import { useCallback, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameProgressContext } from '../contexts/GameProgressContext';
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    MarkerType
  } from 'reactflow';


const initialNodes = [
    {
       id: '1',
       position: { x: 35, y: 55 },
       data: { label: '🍔' },
       type: 'input',
    },
    {
       id: '2',
       position: { x: 200, y: 370 },
       data: { label: '🌳' },
       type: 'output',
    },
    {
       id: '3',
       position: { x: 35, y: 135 },
       data: { label: '🚗' },
       type: 'input',
    },
    {
        id: '4',
        position: { x: 200, y: 290 },
        data: { label: '🚊' },
        type: 'output',
      },
      {
        id: '5',
        position: { x: 35, y: 290 },
        data: { label: '🗑️' },
        type: 'input',
      },
      {
        id: '6',
        position: { x: 200, y: 215 },
        data: { label: '♻️' },
        type: 'output',
      },
      {
        id: '7',
        position: { x: 35, y: 370 },
        data: { label: '🚿' },
        type: 'input',
      },
      {
        id: '8',
        position: { x: 200, y: 135 },
        data: { label: '🌊' },
        type: 'output',
      },
      {
        id: '9',
        position: { x: 35, y: 215 },
        data: { label: '🌱' },
        type: 'input',
      },
      {
        id: '10',
        position: { x: 200, y: 55 },
        data: { label: '🌏' },
        type: 'output',
      },
  ];


  const validConnections = {
    '1': '2', 
    '3': '4', 
    '5': '6',
    '7': '8',
    '9': '10', 
  };


  const initialEdges = [];



function FlowPanel() {

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [counter, setCounter] = useState(0);
    const {handleGameCompletion} = useContext(GameProgressContext);
    const navigate = useNavigate();



    const navigateAndScroll = () => {
        navigate("/story");
        setTimeout(() => {
          const gameSection = document.getElementById("gameSection");
          if (gameSection) {
            gameSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Delay for smoother scroll
      };



    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );


    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );


    const onConnect = useCallback(
        (params) => {

            if (validConnections[params.source] === params.target){
                setEdges((eds) => addEdge({
                    ...params,
                    animated: true,
                    style: { stroke: 'green' },
                    markerEnd: { type: MarkerType.ArrowClosed },
                  }, eds));
                  setCounter((prevCounter) => prevCounter + 1);
                  //show a card with details
                  
            }else {
                alert('Invalid Match!');
            }
        },
        [],
    );

    useEffect(() => {
        if (counter === 5) {
          handleGameCompletion("findImpactGame");
          navigateAndScroll();
        }
    }, [counter, handleGameCompletion, navigateAndScroll]);

   

  return (
    <div className='h-[70%] w-[70%] bg-white rounded-3xl'>
      <ReactFlow 
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowPanel;