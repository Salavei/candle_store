import React from "react";
import './style.css'

const Header = () => {
    return (
        <>
            <header>
                <div className={'header_wrapper'}>
                    <div className={'header_container'}>
                        <div className={'header_logo'}>
                            <h2>Sphere</h2>
                        </div>
                            <button className={'header_button'}>
                                Log in
                            </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header