import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/tarefas'>Tarefas</Link></p>
            <p><Link to='/sobre'>Sobre</Link></p>
            <p><Link to='/contatos'>Contatos</Link></p>
        </header>
    )
}

export default Header
