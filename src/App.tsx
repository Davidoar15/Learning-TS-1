// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useStore } from './hooks/useStore';



function App() {

  const { setFromLanguage } = useStore() 

  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <button onClick={() => {
        setFromLanguage('es')
      }}>Cambiar a Español</button>
    </div>
  )
}

export default App
