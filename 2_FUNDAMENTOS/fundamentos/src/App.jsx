// área destinada para os imports de componentes
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions'
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import TwoNumbers from './components/Number';

// área destinada para o import de estilo
import './App.css'

function App() {
  return (
    <div>
      <h1 className='teste'>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponents />
      <Events />

      <TwoNumbers />
    </div>
  )
}

export default App
