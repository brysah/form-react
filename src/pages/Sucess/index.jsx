import { useState } from "react"
import { Loading } from "../../components/Loading"
import { HiBadgeCheck } from "react-icons/hi";
import styles from './Sucess.module.css'

export function Sucess() {
    const [timer,setTimer] = useState(false);
    setTimeout(()=>{
        setTimer(true);
    },1000)

    return (
        <>
            {
                timer ? 
                ( <div className={styles.message} >
                    <HiBadgeCheck/>
                    <p>Cadastro preenchido com sucesso!</p>
                </div> ) :
                ( <Loading/> )
            }
        </>
    )
}