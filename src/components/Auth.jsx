import axios from "axios"
import { useContext, useState } from "react"
import { GameProgressContext } from "../contexts/GameProgressContext"


const AuthPage = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(false);

    const { setUser } = useContext(GameProgressContext);

    const register = async () => {
        try {
            const { data } = await axios.post('/api/users/create', { email: state.email, password: state.password })

            setUser(data.user);

            localStorage.setItem('access_token', data.tokens.access);
            localStorage.setItem('refresh_token', data.tokens.refresh);

        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    const handleRegister = async (event) => {
        await register();
    }


    return <>
        <input type="text" />
        <input type="password" />
        <button onClick={handleRegister}>Register</button>
        { error ? (
            <p>Error</p>
        ) : <></> }
    </>
}