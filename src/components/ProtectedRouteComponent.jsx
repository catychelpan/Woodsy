import { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { GameProgressContext } from '../contexts/GameProgressContext';

const ProtectedRoute = () => {
  const { gameProgress } = useContext(GameProgressContext);
  const allGamesCompleted = Object.values(gameProgress).every(Boolean);

  return (
    // Render Congratulations conditionally
    allGamesCompleted ? <Navigate to="/congratulations" /> : <Navigate to="/story" />
  );

};

export default ProtectedRoute;