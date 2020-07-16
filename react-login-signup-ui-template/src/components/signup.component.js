import React, { Component } from "react";


export default class SignUp extends Component {

    //по неведомым мне причинам не сохраняется первый пароль, нужно попозже
    constructor(props) {
        super(props);
        this.state = {
            "name": "",
            "username": "",
            "email": "",
            "phone_number": 123,
            "password": "test_password123",
            "password2": "test_password123"
        };
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        // this.handlePassword = this.handlePassword.bind(this);
        // this.handlePassword2 = this.handlePassword2.bind(this);
        this.login = this.login.bind(this);
        this.justTest = this.justTest.bind(this);
      }
    
    login(event) {
        alert(JSON.stringify(this.state));
        fetch(`http://127.0.0.1:8000/donators/create/`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
            }).then( response => response.json())
            .catch( error => console.log(error));
            }

    handleEmail(event) {
        this.setState({email: event.target.value});
      };


    // // handlePassword(event) {
    //     this.setState({password: event.target.value});
    //   };

    // handlePassword2(event) {
    //     this.setState({password2: event.target.value});
    //   };

    handleFirstName(event) {
        this.setState({name: event.target.value});
      };


    handleLastName(event) {
        this.setState({username: event.target.value});
      };

    //тут просто проверка - действительно ли сохраняются почта и пароль
    justTest(event){
        alert(`this is name ${this.state.name}`);
        alert(`this is username ${this.state.username}`);
        alert(`this is email ${this.state.email}`);
        alert(`this is password ${this.state.password}`);
        alert(`this is second password ${this.state.password2}`)
    };
    //   Вообще хз что это:
    //   myChangeHandler = (event) => {  
    //     let nam = event.target.name;
    //     let val = event.target.value;
    //     this.setState({[nam]: val});
    //   }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" 
                    placeholder="First name" required
                    value={this.state.value} onChange={this.handleFirstName}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" 
                    placeholder="Last name" required
                    value={this.state.value} onChange={this.handleLastName}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" 
                    placeholder="Enter email" required
                    value={this.state.value} onChange={this.handleEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" 
                    placeholder="Enter password" required
                    // value={this.state.value} onChange={this.handlePassword}
                    // onChange={this.handlePassword2}
                    />
                </div>

                <button 
                    type="submit" className="btn btn-primary btn-block" 
                    onClick={this.login}>
                    Sign Up
                </button>
                <p className="forgot-password text-right">
                    Already registered <a href="sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}