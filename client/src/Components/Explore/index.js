import React, { useState } from "react";
import './style.css';
import { useSelector } from "react-redux";



const Explore = () => {
    const correctPhoneNumber = useSelector((state) => state?.counter.phone_number);
    const correctUserId = useSelector((state) => state?.counter.id);
    const [count, setCount] = useState('')
    const [price, setPrice] = useState('')

    const orderOne = async() => {
        if(count >=1) {
            let order = {
            "phone_number": `${correctPhoneNumber}`,
            "address": "nezalezhnasti",
            "candle_t": "1",
            "candle_color": "1",
            "candle_flavor": "1",
            "candle_volume": "1",
            "user_id": `${correctUserId}`
            }
        let response = await fetch('https://siteitoverone.herokuapp.com/order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(order)
        });

        let result = response.status;
        if(result == 400) {
            alert('Необходимо войти в учетную запись')
        } else if (result == 201){
            alert('Заказ успешно совершен')
        }
    } else if (count == 0) {
        alert('Даннх свечей нет в наличии')
    }
}
        const getPrice = async () => {
            let response = await fetch('https://siteitoverone.herokuapp.com/product_get/');
            let result = await response.json();
            setCount(result[0].count);
            setPrice(result[0].price)
            console.log(result[0].price)
        }

        getPrice()

    return (
        <>
            <section className={'explore'}>
                <div className={'explore_wrapper'}>
                    <div className={'explore_container'}>
                        <h2 className={'explore_heading'}>
                            EXPLORE
                        </h2>
                        <div className={'explore_mainContainer'}>
                            <div className={'explore_blackCoconut'}>
                                <h3 className={'explore_coconut'}>
                                    Black Coconut
                                </h3>
                                <p className={'explore_composition'}>
                                    <span>Состав:</span>  груша, гардения, орхидея, ваниль, сандал, мускус, кедр, черный перец.
                                </p>
                                <p className={'explore_price'}>
                                    <span>Объем:</span> 200мл
                                    <span> Цена: {price} BYN</span>
                                </p>
                                <button className={'explore_button'} onClick = {orderOne} >
                                    Customize
                                </button>
                            </div>
                            <div className={'explore_imgWrapper'}>
                                <div className={'explore_imgContainer'}>
                                    <div className={'explore_img'}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore