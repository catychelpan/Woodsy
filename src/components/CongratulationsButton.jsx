import { useNavigate } from "react-router-dom";


function CongratulationsButton() {

    const navigate = useNavigate();
    
  return (
    <div onClick={() => navigate("/congratulations")} className='max-w-[400px] relative cursor-pointer lg:top-[-1150px] lg:left-[1100px]'>
      <img src="../../public/landing/treasure-box.png" alt="treasure box" />
    </div>
  )
}

export default CongratulationsButton
