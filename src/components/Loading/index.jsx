import loading from '../../assets/tube-spinner.svg'
import styles from './Loading.module.css'
export function Loading() {
    return (
        <>
            <img className={styles.loading}  src={loading} alt="loader" />
        </>
    )
}