import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { GameProgressContext } from "../contexts/GameProgressContext"
import gsap from "gsap";
import RegisterImage from "../assets/landing/CongratulationsCharactersGroup.svg"
import axios from '../network/axios';


const RegisterPage = () => {

    const navigate = useNavigate();

    const handleSignClick = () => {
        gsap.to(".bg-white", {
          opacity: 0,
          duration: 0.75,
          onComplete: () => {
            navigate("/story");
          },
        });
      };

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(false);


    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });




    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return 'Email is required';
        }
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    };

    const validatePassword = (password) => {
        if (!password) {
            return 'Password is required';
        }
        if (password.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        return '';
    };



    const { setUser } = useContext(GameProgressContext);

    const register = async () => {
        try {
            const { data } = await axios.post('/api/users/create/', { email: state.email, password: state.password })

            setUser({ email: data.user.email, quizzes: data.user.quizzes })

            localStorage.setItem('access_token', data.access);

            localStorage.setItem('refresh_token', data.refresh);

            handleSignClick();

        } catch (error) {
            console.log(error)
            setError(true)
        }
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        
        const emailError = validateEmail(state.email);
        const passwordError = validatePassword(state.password);

        setErrors({
            email: emailError,
            password: passwordError
        });

        if (!emailError && !passwordError) {
            await register();
        }
    };


    return (
        <div className="min-h-screen flex ">

            <div className="w-1/2 p-10 flex flex-col justify-center items-center">
                <div className="max-w-md w-full mx-auto ">

                    <div className="flex flex-col justify-center items-center">

                        <h1 className="text-5xl font-bold text-teal-800 mb-2 text-center">
                            WELCOME
                        </h1>
                        <p className="text-gray-600 mb-8 text-center">
                            SIGN UP TO START YOUR EDUCATIONAL JOURNEY AND SAVE YOUR PROGRESS!
                        </p>

                    </div>       
                    
                    
                        <div>
                            <label className="block text-teal-800 mb-2">
                                EMAIL
                            </label>
                            <input 
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                                value={state.email}
                                onChange={(e) => setState(prev => ({
                                    ...prev, 
                                    email: e.target.value
                                }))}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-[12px] mt-1 mb-2">{errors.email}</p>
                            )}
                        </div>
                        
                        <div>
                            <label className="block text-teal-800 mb-2 mt-6">
                                PASSWORD
                            </label>
                            <input 
                                type="password"
                                placeholder="ENTER YOUR PASSWORD"
                                className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                                value={state.password}
                                onChange={(e) => setState(prev => ({
                                    ...prev, 
                                    password: e.target.value
                                }))}
                            />
                            
                            {errors.password && (
                                <p className="text-red-500 text-[12px] mt-1 mb-2">{errors.password}</p>
                            )}
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-teal-800 mb-4 mt-8 text-white py-5 rounded-lg hover:bg-teal-700 transition-colors"
                            onClick={handleRegister} 
                        >
                            SIGN UP
                        </button>
                        
                        {error && (
                            <p className="text-red-500 text-center">
                                Registration failed. Please try again.
                            </p>
                        )}

                        <p className="text-center text-gray-500">
                            ALREADY HAVE AN ACCOUNT?{' '}
                            <a href="/login" className="text-teal-800 hover:underline">
                                SIGN IN
                            </a>
                        </p>
                    
                </div>
            </div>

           
            <div className="w-1/2 bg-primary_light flex items-center justify-center rounded-3xl">
                <div className="p-12">
                    <img src={RegisterImage} alt="" />
                </div>
            </div>
        </div>
    )

}

export default RegisterPage