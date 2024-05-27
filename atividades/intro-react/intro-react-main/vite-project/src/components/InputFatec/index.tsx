import styles from './InputFatec.module.css'

interface Props {
    placeholder: 'Usuário' | 'E-mail' | 'Telefone'
    type: 'string' | 'tel'
}

function InputUser({placeholder, type}: Props) {
    return (
        <input className={styles.botaoFatec} placeholder={placeholder} type={type}/>
    )
}

export default InputUser
