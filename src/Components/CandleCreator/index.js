import React from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import "./style.css";
import {useState} from "react";


const Creator = () => {
    const [value, SetValue] = useState('   10')


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
                                    <div className={'figure'}></div>
                                    <div className={'default'}></div>
                                </div>
                            </div>
                            <div className={'creator_candleColor'}>
                                <p>Цвет: </p>
                                <div>
                                    <div className={'grey'}></div>
                                    <div className={'orange'}></div>
                                    <div className={'black'}></div>
                                </div>
                            </div>
                            <div className={'creator_candleVolume'}>
                                <p> Объем(мл): </p>
                                <div>
                                    <div className={'hundred'}></div>
                                    <div className={'twoHundred'}></div>
                                </div>
                            </div>
                            <div className={'creator_candleSmell'}>
                                <p> Запах: </p>
                                <div>
                                    <div className={'apple'}></div>
                                    <div className={'chimney '}></div>
                                    <div className={'coconut '}></div>
                                    <div className={'berry '}></div>
                                    <div className={'forest'}></div>
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
                        <div className={'creator_arrow'}></div>
                        <div className={'creator_circle'}></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Creator
