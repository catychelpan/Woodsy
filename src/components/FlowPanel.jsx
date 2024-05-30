
import 'reactflow/dist/style.css';
import { useCallback, useState } from 'react';

import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    MarkerType
  } from 'reactflow';
  import Modal from './Modal';


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
    const [showModal, setShowModal] = useState(false);
    const [currentPairIndex, setcurrentPairIndex] = useState(0);


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
                  //change the current pair index and enable showing a pop up
                  setcurrentPairIndex(params.source);
                  setShowModal(true);
                  
            }else {
                alert('Invalid Match!');
            }
        },
        [],
    );

    

   

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
      {showModal && (
                <Modal
                    pairIndex={currentPairIndex}
                    onClose={setShowModal}
                    counterState={counter}
                />
            )}
      
    </div>
  );
}

export default FlowPanel;