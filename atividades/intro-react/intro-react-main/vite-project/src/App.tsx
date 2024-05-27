import './App.css'
import ButtomFatec from './components/ButtomFatec'
import InputUser from './components/InputFatec'
import NomeFatec from './components/NomeFatec'

function App() {
  return (
    <>
      <NomeFatec />
      <InputUser placeholder='Usuário' type='string'/> 
      <InputUser placeholder='E-mail' type='string' />
      <InputUser placeholder='Telefone' type='tel' />
      <ButtomFatec type='submit' label='Entrar em contato' />
    </>
  )
}

export default App
