import "./stylesSignIn.css";

const SignIn = () => {

    return (
        <div style={{ textAlign: "-webkit-center" }}>
            <form className="formSignIn">
                <h1>
                    Вход
                </h1>
                <p>Email</p>
                <input className="email" />
                <p>Пароль</p>
                <input className="password" />
                <div className="aBox">
                    
                    <input type="checkbox" id="checkboxInput" /> <label for='checkboxInput'></label><a>Запомнить меня</a>
                    
                    <a>Я забыл(а) пароль</a>
                </div>
                <button className="buttonSingIn">Войти</button>
                <a>Регистрация</a>
            </form>
        </div>
    )
}

export default SignIn