import { useState } from 'react'
import styles from './Input.module.css'

export function Input({ name, legend, icon: Icon, type,handleChange,valid }) {
    
    return (  
         <fieldset 
         className={`${styles.fieldset_container} ${styles[valid]}`}>
            <legend>{legend}</legend>
            <div className={styles.input_container}>
                <input
                    type={type}
                    name={name}
                    id={name}
                    onFocus={(e) => e.target.parentNode.parentNode.classList.add(styles.focus)}
                    onBlur={(e) => e.target.parentNode.parentNode.classList.remove(styles.focus)}
                    onChange={handleChange}
                />

                <label htmlFor="name"></label>
                {<Icon size="20" />}
            </div>
        </fieldset>
    )
}