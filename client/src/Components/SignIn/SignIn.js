import "./stylesSignIn.css"

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
                    <input type="checkbox" />Запомнить меня
                    <a>Я забыл(а) пароль</a>
                </div>
                <button className="buttonSingIn">Войти</button>
                <a>Регистрация</a>
            </form>
        </div>
    )
}

export default SignIn