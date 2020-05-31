import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import {Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import { useSelector } from 'react-redux';

export default function NavBar() {
    const role = useSelector(state => state.user.userRole);
    const auth = useSelector(state => state.auth.auth);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let personalpage;
    console.log(role)
    console.log(auth)

    if(auth === false){
        personalpage = ""
    }else if(role === "buyer"){
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
                <Navbar>
                    <NavbarBrand href="/">the Social Opus</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Nav className="nav-links">
                        <NavItem>
                            <Link to="/">Gallery</Link>
                        </NavItem>
                            {personalpage}
                        <NavItem>
                            <Link to="/login">{ auth ? "Log Out" : "Log In" }</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        </BrowserRouter>
    )
}
