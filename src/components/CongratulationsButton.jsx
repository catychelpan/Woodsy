
/* eslint-disable react/prop-types */


import Treasure from "../assets/landing/treasure-box.png"


function CongratulationsButton({onOpen}) {


  return (
    <div onClick={onOpen} className='max-w-[400px] relative cursor-pointer lg:top-[-1150px] lg:left-[1100px]'>
      <img src={Treasure} alt="treasure box" />
    </div>
  )
}

export default CongratulationsButton
