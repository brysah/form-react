import styles from './Button.module.css'

export function Button({type,text,...rest}){
    return(
        <button type={type} className={styles.button_primary} {...rest}>
            {text}
        </button>
    )
}