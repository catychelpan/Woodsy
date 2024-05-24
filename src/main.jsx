import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GameProgressProvider} from './contexts/GameProgressContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameProgressProvider>
    <App />
  </GameProgressProvider>,
)
