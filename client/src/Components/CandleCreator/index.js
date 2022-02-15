import React from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import "./style.css";
import {useState} from "react";
import {useSelector} from "react-redux";

const Creator = () => {
    const [value, SetValue] = useState('')
    const [type, setType] = useState('1')
    const [color,setColor] = useState('1')
    const [volume, SetVolume] = useState('1')
    const [smell, setSmell] = useState('1')
    const correctPhoneNumber = useSelector((state) => state?.counter.phone_number);
    const correctUserId = useSelector((state) => state?.counter.id);
    

    const postOrder = async() => {

        let order = {
            "phone_number": `${correctPhoneNumber}`,
            "address": "mikhalova",
            "candle_t": `${type}`,
            "candle_color": `${color}`,
            "candle_flavor": `${smell}`,
            "candle_volume": `${volume}`,
            "user_id": `${correctUserId}`
        };

        let response = await fetch('https://siteitoverone.herokuapp.com/order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(order)
        });

        let result = await response.json()

        if(result.phone_number == "Это поле не может быть пустым."){
            alert('Необходимо зарегистрироваться или войти')
        } else (
            alert("Заказ принят")
        )

    }





    return (
        <>
            <Header/>
            <section className={'creator_wrapper'}>
                <div className={'creator_container'}>
                    <h3 className={'creator_timeToCreate'}>It’s time to create your special candle!</h3>
                    <div className={'creator_creatorBlock'}>
                        <div className={'creator_candle'}>
                        </div>
                        <div className={'creator_filter'}>
                            <div className={'creator_candleType'}>
                                <p>Тип свечи: </p>
                                <div>
                                    <div className={'figure'} onClick = {() => setType('1')} ></div>
                                    <div className={'default'} onClick = {() => setType('2')}></div>
                                </div>
                            </div>
                            <div className={'creator_candleColor'}>
                                <p>Цвет: </p>
                                <div>
                                    <div className={'grey'} onClick = {()=> setColor('1')}></div>
                                    <div className={'orange'} onClick = {()=> setColor('2')}></div>
                                    <div className={'black'}  onClick = {()=> setColor('3')}></div>
                                </div>
                            </div>
                            <div className={'creator_candleVolume'}>
                                <p> Объем(мл): </p>
                                <div>
                                    <div className={'hundred'} onClick = {()=> {SetVolume('1'); SetValue('10')}}></div>
                                    <div className={'twoHundred'} onClick = {()=> {SetVolume('2');SetValue('20') }}></div>
                                </div>
                            </div>
                            <div className={'creator_candleSmell'}>
                                <p> Запах: </p>
                                <div>
                                    <div className={'apple'} onClick = {()=> setSmell('1')}></div>
                                    <div className={'chimney '} onClick = {()=> setSmell('2')}></div>
                                    <div className={'coconut '} onClick = {()=> setSmell('3')}></div>
                                    <div className={'berry '} onClick = {()=> setSmell('4')}></div>
                                    <div className={'forest'} onClick = {()=> setSmell('5')}></div>
                                </div>
                            </div>
                            <div className={'creator_candlePrice'}>
                                <p> Цена: </p>
                                <div>
                                    <div className={'price'}>
                                        <input value={value}></input>
                                    </div>
                                    <p> BYN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'creator_confirmOrder'}>
                        <p>Подтвердить заказ</p>
                        <div className={'creator_arrow'} onClick = {postOrder}></div>
                        <div className={'creator_circle'}onClick = {postOrder}></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Creator

