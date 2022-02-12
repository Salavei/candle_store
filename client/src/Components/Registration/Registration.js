import * as React from 'react';
import "./stylesRegistration.css"
import Footer from "../Footer/Footer"
import logo from "./img/peaple.svg"
import right from "./img/right.svg"
import left from "./img/left.svg"
import circle from "./img/circle.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Registration = () => {

const [first_name, setFirst_name] = useState('')
const [last_name, setLast_name] = useState('')
const [phone_number, setPhone_number] = useState('')
const [email, setEmail] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

    let user = {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number
      };

    const fetchOne = async () => {
        const t = await fetch('https://siteitoverone.herokuapp.com/user_create/', 
        
        {method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)}
        );
        console.log(t.json())
        if(t.statusText == "Create"){
            // window.location()
        }
    }
    
    return (
        <>
            <div className="borderContainer">
            <Link to='/home'>
                <div className='backButton'>
                    <img src={left} />
                    <span>назад</span>
                </div>
                </Link>
                <header className="registrHeader">
                    <div>
                        <span>Sphere</span>
                        <p>candle</p>
                    </div>
                    <img src={logo} />
                </header>
                <div className="greyLine"></div>
                <form className="registrForm">
                    <h1>
                        Регистрация
                    </h1>
                    <h2>
                        Личные данные
                    </h2>
                    <div>
                        <input placeholder="Имя" value={first_name} onChange={(e)=>setFirst_name(e.target.value)}/>
                        <input placeholder="Фамилия" value={last_name} onChange={(e)=>setLast_name(e.target.value)}/>
                    </div>
                    <input placeholder="Телефон" value={phone_number} onChange={(e)=>setPhone_number(e.target.value)}/>
                    <input placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <h2>
                        Данные для входа
                    </h2>
                    <input placeholder="Логин" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input placeholder="Пароль" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <div onClick={fetchOne} className='buttonRegistr' style={{ justifyContent: "end" }}>
                        <span style={{ alignSelf: "center", marginRight: "30px" }}>Зарегистрироваться</span>
                        <img style={{ marginRight: "-30px" }} src={right} />
                        <img src={circle} />
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Registration