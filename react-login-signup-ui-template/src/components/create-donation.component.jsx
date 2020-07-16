import React, { Component } from "react";


export default class CreateDonation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "donator": null,
            "donation_date": new Date().toLocaleString(),
            "total_amount": null,
            "is_distributed": false
        };
        this.handleDonatorId = this.handleDonatorId.bind(this);
        this.handleSumOfDonation = this.handleSumOfDonation.bind(this);
        
        this.donate = this.donate.bind(this);
      }
    
    donate(event) {
        alert(JSON.stringify(this.state));
        fetch(`http://127.0.0.1:8000/donations/`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
            }).then( response => response.json())
            .catch( error => console.log(error));
            }

    handleDonatorId(event) {
        this.setState({donator: event.target.value});
      };


    handleSumOfDonation(event) {
        this.setState({total_amount: event.target.value});
      };

    render() {
        return (
            <form>
                <h3>Donator ID</h3>

                <div className="form-group">
                    <label>Donator ID</label>
                    <input type="number" className="form-control" 
                    placeholder="input Donator ID" required
                    value={this.state.value} onChange={this.handleDonatorId}/>
                </div>

                <div className="form-group">
                    <label>Sum of Donation</label>
                    <input type="number" className="form-control" 
                    placeholder="input sum of donation" required
                    value={this.state.value} onChange={this.handleSumOfDonation}/>
                </div>

                <button 
                    type="submit" className="btn btn-primary btn-block" 
                    onClick={this.donate}>
                    Donate
                </button>
            
            </form>
        );
    }
}