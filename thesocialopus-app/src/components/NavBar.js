import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import { useSelector, connect } from 'react-redux';
import { logOut } from '../redux/actions';

function NavBar(props) {
    const auth = useSelector(state => state.auth.auth);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const logout =()=>{
        this.props.unAuth()
    }

    let authButton = <NavItem>
                        <Link to="/" onClick={logout}>Log Out</Link>
                     </NavItem>

    if(auth === false){

        authButton = <NavItem>
                        <Link to="/login">Log In</Link>
                    </NavItem>

    }


    return (
            <div className="nav-wrap-div">
                <Navbar>
                    <NavbarBrand href="/">the Social Opus</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Nav className="nav-links">
                        <NavItem>
                            <Link to="/">Gallery</Link>
                        </NavItem>
                        <NavItem>
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