import React from 'react'
import SellerExhibit from './SellerExhibit';
import Cart from './Cart';
import { useSelector } from 'react-redux';

export default function Profile() {
    const role = useSelector(state => state.user.role);
    const auth = useSelector(state => state.auth.auth);
    let display;
    
    if((auth) && (role === "sellers")){
        display = <SellerExhibit />
    } else if (auth){
        display = <Cart />
    } else {
        display = "Sign up for an account today!"
    }

    return (
        <div className="profile-wrap">
            {display}
        </div>
    )
}
