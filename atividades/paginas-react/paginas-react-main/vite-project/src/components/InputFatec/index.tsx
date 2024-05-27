import styles from './InputFatec.module.css'

interface Props {
    placeholder: 'Usuário' | 'E-mail' | 'Senha' | 'Telefone'
    type: 'string' | 'password' | 'tel'
}

function InputUser({placeholder, type}: Props) {
    return (
        <div className={styles.form}>
            <input className={styles.botaoFatec} placeholder={placeholder} type={type} />
        </div>
    )
}

export default InputUser
