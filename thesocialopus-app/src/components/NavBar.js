import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import { useSelector, connect, useDispatch } from 'react-redux';

function NavBar(props) {
    const auth = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let authButton = <NavItem className="nav-links">
                        <Link to="/" onClick={() => dispatch({type:"logged_out"})}>Log Out</Link>
                     </NavItem>

    if(auth === false){

        authButton = <NavItem className="nav-links">
                        <Link to="/login">Log In</Link>
                    </NavItem>

    }


    return (
            <div className="nav-wrap-div">
                <Navbar>
                    <NavbarBrand href="/">the Social Opus</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Nav>
                        <NavItem className="nav-links">
                            <Link to="/">Gallery</Link>
                        </NavItem> 
                        <NavItem className="nav-links">
                            <Link to="/profile">My Profile</Link>
                        </NavItem>
                        {authButton}
                    </Nav>
                </Navbar>
            </div>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        user: state.currentUser,
        role: state.userRole
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        unAuth: () => { dispatch({type:"logged_out"}) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);