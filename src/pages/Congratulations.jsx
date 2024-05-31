/* eslint-disable react/prop-types */
import {X} from 'lucide-react';

const Congratulations = ({onClose}) => {
  

  return (
    <div className='fixed inset-0 z-40 bg-secondary backdrop-blur-sm flex flex-col justify-center items-center'>
      <div className='flex justify-end mb-[20px]'>
          <button onClick={onClose}><X size={30}/></button>
      </div>
      <div className='bg-primary flex flex-col justify-center items-center rounded-3xl w-[60%] h-[80%] text-white px-[90px] py-[30px]'>

        <h1 className='text-center font-bold text-[30px]'>Congratulations!!!</h1>
        <p className='text-center tracking-wide mt-[10px] text-[16px] lg:max-w-[55%]'>Congratulations! You have successfully finished a mission to save the forest. But we all know that unfortunately environmental problems cannot be solved with magic. So here is the '30-day Eco-Friendly' checklist to make a small but meaningfull contribution to our planet!</p>
        <a href='https://www.canva.com/design/DAGGySw-BvU/EDZ67Xs_ARRtZ4nVK-gdgw/view?utm_content=DAGGySw-BvU&utm_campaign=designshare&utm_medium=link&utm_source=editor' target='_blank' className='cursor-pointer tracking-wide px-[25px] font-bold hover:bg-emerald-400 transition-colors bg-primary_light mt-4 py-[20px] mb-5 rounded-2xl'>Get A Gift</a>



        <img className='lg:w-[60%]' src="../../public/CongratulationsCharactersGroup.svg" alt="" />
      </div>
      
    </div>
  )
}

export default Congratulations
