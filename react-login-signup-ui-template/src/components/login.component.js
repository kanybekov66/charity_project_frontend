import React, { Component } from "react";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.justTest = this.justTest.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
      };


    handlePassword(event) {
        this.setState({password: event.target.value});
      };

    //тут просто проверка - действительно ли сохраняются почта и пароль
    justTest(event){
        alert(this.state.email);
        alert(this.state.password);

    };



    render() {
        return (
            <form>
                <h3>Sign In</h3>

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

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn btn-primary btn-block" onClick={this.justTest} >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}