import React, { useState, useEffect} from "react"
import PropTypes from 'prop-types'
import axios from '../network/axios';



export const GameProgressContext = React.createContext()

const token = localStorage.getItem("access_token")

export const GameProgressProvider = ({ children }) => {

    const [gameProgress, setGameProgress] = useState({
      trueFalseGame:false,
      trashSortingGame:false,
      findImpactGame:false,
    });

    const [user, setUser] = useState({
      email: '',
      quizzes: [],
    })

    const fetchUserState = async (token) => {
      try {
        const { data } = await axios.get('/api/users/me', { headers: { Authorization: `Bearer ${token}` } })
        setUser({ email: data.email, quizzes: data.quizzes })
        setGameProgress((prevState) => ({
            ...prevState,
            trueFalseGame: data.quizzes.find(item => item.title === 'trueFalseGame').passed,
            trashSortingGame: data.quizzes.find(item => item.title === 'trashSortingGame').passed,
            findImpactGame: data.quizzes.find(item => item.title === 'findImpactGame').passed,
        }));
      } catch(error) {
        console.log(error)
      }
    }


    useEffect(() => {
      if (token) {
        fetchUserState(token)
      }
    }, [token])

    const handleGameCompletion = (game) => {
      setGameProgress((prevState) => ({
        ...prevState,
        [game]: true,
      }));
    } 


    useEffect(() => {
      console.log("Game progress updated:", gameProgress);
    }, [gameProgress]);


    return <GameProgressContext.Provider value={{gameProgress,handleGameCompletion, setGameProgress, setUser, user}}>{children}</GameProgressContext.Provider>

}

GameProgressProvider.propTypes = {
    children: PropTypes.element.isRequired,
  }

  