import styles from './Home.module.css'
import { Input } from '../../components/Input'
import { HiOutlineMail, HiUserCircle, HiOutlineKey } from "react-icons/hi";
import { Button } from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export function Home() {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [emailValidate, setEmailValidate] = useState('unset');

    const [user, setUser] = useState();
    const [userValidate, setUserValidate] = useState('unset');

    const [password, setPassword] = useState();
    const [passwordValidate, setPasswordValidate] = useState('unset');

    function handleEmail(e) {
        const value = e.target.value;
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        setEmailValidate(pattern.test(value) ? 'valid' : 'invalid');
        emailValidate ? setEmail(value) : setEmail('');
    }

    function handlePassword(e) {
        const value = e.target.value;
        const pattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        setPasswordValidate(pattern.test(value) ? 'valid' : 'invalid');
        passwordValidate ? setPassword(value) : setPassword('');
    }

    function handleUser(e) {
        const value = e.target.value;
        setUserValidate(value.length >= 4 ? 'valid' : 'invalid');
        userValidate ? setUser(value) : setUser('');
    }

    function handleSignUp(e) {
        e.preventDefault();
        if (emailValidate === 'valid' && userValidate === 'valid' && passwordValidate === 'valid') {
            navigate('/sucess');
        } 
    }

    return (
        <div className={styles.container} >
            <h1>SignUp</h1>
           <form action="">
           <Input
                name="email"
                legend="Email"
                type="email"
                icon={HiOutlineMail}
                handleChange={handleEmail}
                valid={emailValidate}
            />
            <Input
                name="user"
                legend="Usuário"
                type="text"
                icon={HiUserCircle}
                handleChange={handleUser}
                valid={userValidate}
            />
            <Input
                name="password"
                legend="Senha"
                type="password"
                icon={HiOutlineKey}
                handleChange={handlePassword}
                valid={passwordValidate}
            />
            <Button
                type='submit'
                text='Confirmar'
                onClick={handleSignUp}
            />
           </form>
        </div>
    )
} 