import "./stylesRegistration.css"
import Footer from "../Footer/Footer"
import logo from "./img/peaple.svg"
import right from "./img/right.svg"
import left from "./img/left.svg"
import circle from "./img/circle.svg"

const Registration = () => {
    
    return (
        <>
            <div className="borderContainer">
                <div className='backButton'>
                    <img src={left} />
                    <span>назад</span>
                </div>
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
                        <input placeholder="Имя" />
                        <input placeholder="Фамилия" />
                    </div>
                    <input placeholder="Телефон" />
                    <input placeholder="E-mail" />
                    <h2>
                        Данные для входа
                    </h2>
                    <input placeholder="Логин" />
                    <input placeholder="Пароль" />
                    <div className='buttonRegistr' style={{ justifyContent: "end" }}>
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