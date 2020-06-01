import React, { useState, Component } from 'react';
import { get, post } from '../axios-calls/calls';
import { Button, Form, FormGroup, Label, Input, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser, setRole , logIn } from '../redux/actions'



export default class LogIn extends Component{
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
          password: null
        };
      }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        });
    } 

    signUp=(e)=>{ 
        let body ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        let role = e.target.name 

        post.call(this,`${role}`, body).then(response =>{
            useDispatch(setCurrentUser(response));
            useDispatch(setRole(role));
            useDispatch(logIn());
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
                                        <Input type="text" name="username" className="login-inputs" placeholder="e.g.: JBeezy" />
                                        <Label for="password">Password </Label>
                                        <Input type="password" name="password" className="login-inputs" placeholder="Password" />
                                    </FormGroup>
                                    <Button color="secondary" name="role" value="seller" block>Log In</Button>
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
                                        <Input type="text" name="username" className="login-inputs" placeholder="e.g.: JBeezy" />
                                        <Label for="password">Password </Label>
                                        <Input type="password" name="password" className="login-inputs" placeholder="Password" />
                                    </FormGroup>
                                    <Button color="secondary" name="role" value="seller" block>Log In</Button>
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
                                        <Input type="text" name="firstName" className="login-inputs" placeholder="e.g.: Jean-Michel" />
                                        <Label for="lastName">Last name </Label>
                                        <Input type="text" name="lastName" className="login-inputs" placeholder="e.g.: Basqiat" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="username">Username </Label>
                                        <Input type="text" name="username" className="login-inputs" placeholder="e.g.: JBeezy" />
                                        <Label for="password">Password </Label>
                                        <Input type="password" name="password" className="login-inputs" placeholder="Password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email </Label>
                                        <Input type="text" name="email" className="login-inputs" placeholder="e.g.: j.basquiat@fakemail.com" />
                                    </FormGroup>
                                    <Button color="secondary" name="role" value="seller" block>Sign Up</Button>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div> 
        )
    }
}
