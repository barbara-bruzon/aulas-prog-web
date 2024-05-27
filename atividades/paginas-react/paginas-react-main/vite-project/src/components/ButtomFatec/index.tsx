import styles from './ButtonFatec.module.css'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtomFatec({type, label}: Props) {
    return (
        <div className={styles.submit}>
            <button className={styles.botaoFatec} type={type}> {label}</button>
        </div>
    ) 
}

export default ButtomFatec