import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { GameProgressContext } from "../contexts/GameProgressContext"
import gsap from "gsap";
import RegisterImage from "../assets/landing/CongratulationsCharactersGroup.svg"
import axios from '../network/axios';

const LoginPage = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

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

    const [error, setError] = useState(false);

    const { setUser, setGameProgress } = useContext(GameProgressContext);


    const login = async () => {
        try {
            const { data } = await axios.post('/api/users/login', { email: state.email, password: state.password })
            setUser({ email: data.user.email, quizzes: data.user.quizzes })
            setGameProgress((prevState) => ({
                ...prevState,
                trueFalseGame: data.user.quizzes.find(item => item.title === 'trueFalseGame').passed,
                trashSortingGame: data.user.quizzes.find(item => item.title === 'trashSortingGame').passed,
                findImpactGame: data.user.quizzes.find(item => item.title === 'findImpactGame').passed,
            }));
            localStorage.setItem('access_token', data.tokens.access);
            localStorage.setItem('refresh_token', data.tokens.refresh);
            handleSignClick();
        }
        catch (error) {
            console.log(error)
            setError(true)
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        await login();
    }


    return (
        <div className="min-h-screen flex ">

            <div className="w-1/2 p-5 flex flex-col justify-center items-center">
                <div className="max-w-md w-full mx-auto ">

                    <div className="flex flex-col justify-center items-center">

                        <h1 className="text-5xl leading-tight font-bold text-teal-800 mb-7 text-center">
                            WELCOME BACK
                        </h1>

                    </div>       
                    
                        <div>
                            <label className="block text-teal-800 mb-2">
                                EMAIL
                            </label>
                            <input 
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="w-full px-4 py-4 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                                onChange={(e) => setState(prev => ({
                                    ...prev, 
                                    email: e.target.value
                                }))}
                            />
                        </div>
                        
                        <div>
                            <label className="block text-teal-800 mb-2">
                                PASSWORD
                            </label>
                            <input 
                                type="password"
                                placeholder="ENTER YOUR PASSWORD"
                                className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                                onChange={(e) => setState(prev => ({
                                    ...prev, 
                                    password: e.target.value
                                }))}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-teal-800 mb-4 mt-8 text-white py-5 rounded-lg hover:bg-teal-700 transition-colors"
                            onClick={handleLogin} 
                        >
                            SIGN IN
                        </button>
                        
                        {error && (
                            <p className="text-red-500 text-center">
                                Log in failed. Please try again.
                            </p>
                        )}

                        <p className="text-center text-gray-500">
                            DO NOT HAVE AN ACCOUNT?{' '}
                            <a href="/register" className="text-teal-800 hover:underline">
                                SIGN UP
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

export default LoginPage