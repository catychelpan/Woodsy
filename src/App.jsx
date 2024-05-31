import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {Suspense} from 'react'
import Preloader from './components/Preloader.jsx';


const Landing = React.lazy(() => import('./pages/Landing.jsx'))
const TrueFalseGame = React.lazy(() => import('./pages/TrueFalseGame.jsx'))
const TrashSortingGame = React.lazy(() => import('./pages/TrashSortingGame.jsx'))
const FindImpactGame = React.lazy(() => import('./pages/FindImpactGame.jsx'))




function App() {
  return (
    <Suspense fallback={'...Loading'}>
     
          <Router>
            <Routes>
              <Route path="/" element={<Preloader />} />
              <Route path="/story" element={<Landing />} />
              <Route path="/true-false-game" element={<TrueFalseGame />} />
              <Route path="/find-impact-game" element={<FindImpactGame />} />
              <Route path="/trash-sorting-game" element={<TrashSortingGame />} />
            </Routes>
          </Router>
      
    </Suspense>
  );
}
 

export default App;
