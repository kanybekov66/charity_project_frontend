import React, { Component } from "react";


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.justTest = this.justTest.bind(this);
      }

    handleEmail(event) {
        this.setState({email: event.target.value});
      };


    handlePassword(event) {
        this.setState({password: event.target.value});
      };

    handleFirstName(event) {
        this.setState({firstName: event.target.value});
      };


    handleLastName(event) {
        this.setState({lastName: event.target.value});
      };

    //тут просто проверка - действительно ли сохраняются почта и пароль
    justTest(event){
        alert(this.state.email);
        alert(this.state.password);
        alert(this.state.firstName);
        alert(this.state.lastName);
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
                    <input type="password" className="form-control" 
                    placeholder="Enter password" required
                    value={this.state.value} onChange={this.handlePassword}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.justTest}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}