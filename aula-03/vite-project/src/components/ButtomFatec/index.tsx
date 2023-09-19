import styles from './ButtonFatec.module.css'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtomFatec({type, label}: Props) {
    return (
        <button className={styles.botaoFatec} type={type}>
            {label}
        </button>
    )
}

export default ButtomFatec