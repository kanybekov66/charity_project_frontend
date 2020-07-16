import React, {Component} from "react";


export default class ShowDonation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8000/donations/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        return (
            <div>
                <input type='text' id='usernameTextField'/>
                <label>ID</label>
                <p></p>
                <button type='submit' onClick={this.boom}>Тыкни меня!</button>
                <p></p>
                <label style={{width: 300+ 'px'}}>Индентификатор пожертвования      </label>
                <label id='donationId'></label>
                <p></p>
                <label style={{width: 300+'px'}}>Идентификатор мецената     </label>
                <label id='donatorId'></label>
                <p></p>
                <label style={{width: 300+'px'}}>Дата пожертвования     </label>
                <label id='donationDate'></label>
                <p></p>
                <label style={{width: 300+'px'}}>Сумма пожертвования    </label>
                <label id='donationAmount'></label>
                <p></p>
                <label style={{width: 300+'px'}}>Роздано ли пожертвование   </label>
                <label id='donationStatus'></label>
            </div>
        );
    }

    boom = () => {
        let username = document.getElementById('usernameTextField').value;
        const {error, isLoaded, items} = this.state;
        let i;
        for (i=0;i<items.length;i++){
            if (items[i].id == username){
                document.getElementById('donationId').innerHTML = items[i].id;
                document.getElementById('donationAmount').innerHTML = items[i].total_amount;
                document.getElementById('donatorId').innerHTML = items[i].donator;
                document.getElementById('donationDate').innerHTML = items[i].donation_date;
                if (items[i].is_distributed === true){
                    document.getElementById('donationStatus').innerHTML = "Да";
                }
                else{
                    document.getElementById('donationStatus').innerHTML = "Нет";
                }
            }
        }

    }
}



