import React from "react";
import './style.css';


const Explore = () => {
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
                                    <span> Цена: 27 BYN</span>
                                </p>
                                <button className={'explore_button'}>
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