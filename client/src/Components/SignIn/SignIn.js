import "./stylesSignIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
   
    const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

      const FindUser = (arr) => {
       return arr.filter(e => e.password == password && e.email == email)
            }

    const fetchOne = async () => {
        const t = await fetch('https://siteitoverone.herokuapp.com/user/?format=json', 
        
        {method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          }}
        );
        const res = await t.json();
        console.log(FindUser(res))
        
    }
    
  

    return (
        <div style={{ textAlign: "-webkit-center" }}>
            <form className="formSignIn">
                <h1>
                    Вход
                </h1>
                <p>Email</p>
                <input type='email' className="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p>Пароль</p>
                <input type="password" className="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className="aBox">
                    
                    <input type="checkbox" id="checkboxInput" /> <label for='checkboxInput'></label><a>Запомнить меня</a>
                    
                    <a>Я забыл(а) пароль</a>
                </div>
                <div 
                 onClick={fetchOne}
                className="buttonSingIn">Войти</div>
                <Link to='/Registration'>
                <a>Регистрация</a>
                </Link>
            </form>
        </div>
    )
}

export default SignIn