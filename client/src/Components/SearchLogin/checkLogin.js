import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import {useSelector} from "react-redux";

const CheckLogin = () => {
    const storeChange = useSelector((state) => state?.counter.user)
    console.log(storeChange)

    return (
        <>
            <div style={{width: '200px'}}>hello</div>
            <CircularProgress disableShrink />;
        </>
    )
}

export default CheckLogin
