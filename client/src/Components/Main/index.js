import React from "react";
import "./style.css"

const Main = () => {
    return(
        <>
            <main>
                <div className={'main_wrapper'}>
                    <div className={'main_container'}>
                        <div className={'main_img'}></div>
                        <div className={'main_layer'}>
                            <h1>Sphere</h1>
                            <p>
                                Экологичные свечи с необычными ароматами для твоего интерьера
                            </p>
                            <div className={'main_customize'}>
                                <p>Customize</p>
                                <div className={'arrow'}></div>
                                <div className={'range'}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main