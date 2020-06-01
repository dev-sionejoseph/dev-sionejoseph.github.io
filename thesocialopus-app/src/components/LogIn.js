import React, { Component } from 'react';
import { get, post } from '../axios-calls/calls';
import { Button, Form, FormGroup, Label, Input, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
// import Axios from 'axios';



class LogIn extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
          activeTab: '1',
          firstName: null,
          lastName: null,
          username: null,
          email: null,
          password: null,
          role: "",
          error: "",
        };
      }

    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        });
    } 

    handleLogIn=(e)=>{ 
        let role = e.target.name 
        let user = this.state.username
        console.log(this.props);

        get.call(this,`${role}/auth/${user}`).then(response =>{
            if((response!== null)){
                console.log("password worked")
                this.props.setAuth()
                this.props.setUser(response)
                this.props.setRole(role)
                console.log(this.props);
            } else {
                this.setState({
                    error:"Invalid credentials; Please try again."
                })
            }
            
        })
    }
    signUp=(e)=>{ 
        let body ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        let role = this.state.role

        post.call(this,`/${role}/`, body).then(response =>{
            if(response !== null){
                this.props.setAuth()
                this.props.setUser(response)
                this.props.setRole(this.state.role)
            } else {
                this.setState({
                    error:"Invalid information; Please fill out form again."
                })
            }  
        })
    }

    toggle=(tab)=> {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
      }

    render() {

        return (

            <div className="login-wrap">
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}>
                            Patrons
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}>
                            Artists
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); }}>
                            Sign Up
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Form>
                                    <legend>Welcome, Patrons!</legend>
                                    <FormGroup>
                                        <Label for="username">Username </Label>
                                        <Input type="text" name="username" className="login-inputs" placeholder="e.g.: JBeezy" onChange={this.handleChange}/>
                                        <Label for="password">Password </Label>
                                        <Input type="password" name="password" className="login-inputs" placeholder="Password" onChange={this.handleChange}/>
                                    </FormGroup>
                                    <Button color="secondary" name="buyers" block onClick={this.handleLogIn}>Log In</Button>
                                    <span className="red-span">{this.state.error}</span>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Form>
                                    <legend>Welcome, Artists!</legend>
                                    <FormGroup>
                                        <Label for="username">Username </Label>
                                        <Input type="text" name="username" className="login-inputs" placeholder="e.g.: JBeezy" onChange={this.handleChange}/>
                                        <Label for="password">Password </Label>
                                        <Input type="password" name="password" className="login-inputs" placeholder="Password" onChange={this.handleChange}/>
                                    </FormGroup>
                                    <Button color="secondary" name="sellers" block onClick={this.handleLogIn}>Log In</Button>
                                    <span className="red-span">{this.state.error}</span>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <Form>
                                    <legend>Join Us!</legend>
                                    <FormGroup>
                                        <Label for="firstName">First name </Label>
                                        <Input type="text" name="firstName" className="login-inputs" placeholder="e.g.: Jean-Michel" onChange={this.handleChange}/>
                                        <Label for="lastName">Last name </Label>
                                        <Input type="text" name="lastName" className="login-inputs" placeholder="e.g.: Basqiat" onChange={this.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="username">Username </Label>
                                        <Input type="text" name="username" className="login-inputs" placeholder="e.g.: JBeezy" onChange={this.handleChange}/>
                                        <Label for="password">Password </Label>
                                        <Input type="password" name="password" className="login-inputs" placeholder="Password" onChange={this.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email </Label>
                                        <Input type="text" name="email" className="login-inputs" placeholder="e.g.: j.basquiat@fakemail.com" onChange={this.handleChange}/>
                                    </FormGroup>
                                        <span className="red-span">{this.state.error}</span>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="role" value="buyers" onChange={this.handleChange}/>{' '}
                                                Patron
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="role" value="sellers" onChange={this.handleChange}/>{' '}
                                                Artist
                                            </Label>
                                        </FormGroup>
                                    <Button color="secondary" name="sign-up" value="seller" block onClick={this.signUp}>Sign Up</Button>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div> 
        )
    }
}

    const mapStateToProps = (state, ownProps) => {
        return{
            auth: state.auth,
            user: state.currentUser,
            role: state.role
        }
    }

    const mapDispatchToProps = (dispatch) =>{
        return{
            setUser: (user) => { dispatch({type:"set_current_user", payload: user}) },
            setRole: (role) => { dispatch({type:"set_user_role", payload: role}) },
            setAuth: () => { dispatch({type:"logged_in"}) },
            unAuth: () => { dispatch({type:"logged_out"}) }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(LogIn)
