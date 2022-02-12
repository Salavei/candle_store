import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <div className={'header_wrapper'}>
                    <div className={'header_container'}>
                        <div className={'header_logo'}>
                            <h2>Sphere</h2>
                        </div>
                        <Link to='/SignIn'>
                            <button className={'header_button'}>
                                Log in
                            </button>
                            </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header