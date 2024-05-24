import './index.css';
import ProtectedRouteComponent from './components/ProtectedRouteComponent';
import React from 'react'
import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom';
import Preloader from './components/Preloader.jsx';


const Landing = React.lazy(() => import('./pages/Landing.jsx'))
const TrueFalseGame = React.lazy(() => import('./pages/TrueFalseGame.jsx'))
const TrashSortingGame = React.lazy(() => import('./pages/TrashSortingGame.jsx'))
const FindImpactGame = React.lazy(() => import('./pages/FindImpactGame.jsx'))
const Congratulations = React.lazy(() => import('./pages/Congratulations.jsx'))


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="/story" element={<Landing />} />
        <Route path="/true-false-game" element={<TrueFalseGame />} />
        <Route path="/find-impact-game" element={<FindImpactGame />} />
        <Route path="/trash-sorting-game" element={<TrashSortingGame />} />
        <Route element={<ProtectedRouteComponent />}>
          <Route path='congratulations' element={<Congratulations />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>     
    </BrowserRouter>
  );


}

export default App;
