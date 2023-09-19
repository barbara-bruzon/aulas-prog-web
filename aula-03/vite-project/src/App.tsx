import './App.css'
import ButtomFatec from './components/ButtomFatec'
import InputFatec from './components/InputFatec'

function App() {
  return (
    <>
      <p>Olá mundo!</p>
      <InputFatec />
      <ButtomFatec type='button' label='Meu botão' />
      <ButtomFatec type='submit' label='Enviar form' />
    </>
  )
}

export default App
