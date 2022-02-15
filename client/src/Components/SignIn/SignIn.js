import "./stylesSignIn.css";
import { useState } from "react";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkUser, firstName, lastName, phoneNumber,eMail} from "../../Redux/slice";
import {userName,userId, } from '../../Redux/slice'



const SignIn = () => {
    const correctUser = useSelector((state) => state?.counter.user);
    const dispatch = useDispatch()


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

        console.log(t.response)

        const res = await t.json();

        let b =  FindUser(res);


        if(b.length) {
            dispatch(checkUser('faithful user'))
            dispatch(userName(b[0].username))
            dispatch(userId(b[0].id))
            dispatch(firstName(b[0].first_name))
            dispatch(lastName(b[0].last_name))
            dispatch(eMail(b[0].email))
            dispatch(phoneNumber(b[0].phone_number))
            alert('Пользователь найден, можно производить заказ')

        } else { alert('Неверный email или пароль')}

        // console.log(b)
        // console.log(res);

        setEmail('');
        setPassword('')


    }


    function foo () {
        return(<Redirect to = '/searchTheLogin'/>)
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
                <div onClick={foo}>
                    <div
                        onClick={fetchOne}
                        className="buttonSingIn">Войти</div>
                </div>


                <Link to='/Registration'>
                <a>Регистрация</a>
                </Link>
            </form>
        </div>
    )
}

export default SignIn