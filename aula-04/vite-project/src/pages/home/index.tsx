import { Link } from 'react-router-dom'
import ButtomFatec from '../../components/ButtomFatec'
import InputUser from '../../components/InputFatec'

export default function Home() {
  return (
    <>
      <InputUser placeholder='Usuário' type='string'/> 
      <InputUser placeholder='E-mail' type='string' />
      <InputUser placeholder='Telefone' type='tel' />
      <ButtomFatec type='submit' label='Entrar em contato' />
      <hr />
      <Link to='/sobre'>Sobre</Link>
    </>
  )
}
