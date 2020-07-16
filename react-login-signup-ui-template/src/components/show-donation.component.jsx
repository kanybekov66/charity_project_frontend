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

    testFunc() {
        fetch('http://localhost:8000/donations/1')
            .then(res => res.json())
            .then((result) => console.log(result))
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
        fetch('http://localhost:8000/donations/' + username)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    }); console.log(this.state.items)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        const {error, isLoaded, items} = this.state;
        document.getElementById('donatorId').innerHTML = items.donator;
        document.getElementById('donationId').innerHTML = items.id;
        document.getElementById('donationDate').innerHTML = items.donation_date;
        document.getElementById('donationAmount').innerHTML = items.total_amount;
        
        
        if (items.is_distributed === true){
            document.getElementById('donationStatus').innerHTML = "Да";
        }
        else{
            document.getElementById('donationStatus').innerHTML = "Нет";
        }
    }
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   } else {
    //     const name = document.getElementById('dropDown').value;
    //     let x;
    //     for (x = 0; x < items.length; x++) {
    //       if (items[x].name === name) {
    //         if (items[x].money > document.getElementById('priceTextField').value) {
    //           alert("Оплата прошла!")
    //           this.sendPost({
    //             "name": items[x].name,
    //             "product": document.getElementById('titleTextField').value,
    //             "total": document.getElementById('priceTextField').value
    //           })
    //           return ;
    //         }else{
    //           alert("Недостаточно средств!");
    //           return;
    //         }
    //       }
    //     }
    //   }
    // }
    //
    // sendPost = (content) => {
    //   fetch('http://localhost:8000/shop/check/',{
    //     method: 'post',
    //     headers: {'Content-type':'application/json'},
    //     body: JSON.stringify(content)
    //   }).then(function (response) {
    //     return response.json();
    //   }).then(function (data) {
    //
    //   });
    // }
}



