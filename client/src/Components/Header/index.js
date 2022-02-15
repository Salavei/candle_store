import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const correctUser = useSelector((state) => state?.counter.user);
    const userSign = useSelector((state)=> state?.counter.username)

    function foo () {
        if (correctUser == 'faithful user') {
           return <div className="hiUser" >Hi, {userSign}</div>
        } else {
         return   <button className={'header_button'}>
            Log in
             </button>
        }
    }


    return (
        <>
            <header>
                <div className={'header_wrapper'}>
                    <div className={'header_container'}>
                        <div className={'header_logo'}>
                            <h2>Sphere</h2>
                        </div>
                        <Link to='/SignIn'>
                                {foo()}
                            </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header