import './App.css'
import { Route } from 'react-router-dom'
import FormCreatePubli from './components/FormCreatePubli/FormCreatePubli.jsx'

function App () {
  return (
    <div className='App'>
      <Route path='/form' exact component={FormCreatePubli} />
    </div>
  )
}

export default App
