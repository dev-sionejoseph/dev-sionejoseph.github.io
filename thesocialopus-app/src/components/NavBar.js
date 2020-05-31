import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import {Nav, NavItem, NavLink} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
    const role = useSelector(state => state.user.userRole);
    const auth = useSelector(state => state.auth.auth);
    let personalpage;
    console.log(role)
    console.log(auth)

    if(auth == false){
        personalpage = ""
    }else if(role == "buyer"){
        personalpage = 
        <NavItem>
            <Link to="/cart">My Cart</Link>
        </NavItem>
    }else {
        personalpage = 
        <NavItem>
            <Link to="/exhibit">My Exhibit</Link>
        </NavItem>
    }


    return (
        <BrowserRouter>
            <div className="nav-wrap-div">
                <Nav pills>
                    <NavItem>
                        <Link to="/">Gallery</Link>
                    </NavItem>
                        {personalpage}
                    <NavItem>
                        <Link to="/login">{ auth ? "Log Out" : "Log In" }</Link>
                    </NavItem>
                </Nav>
            </div>
        </BrowserRouter>
    )
}
