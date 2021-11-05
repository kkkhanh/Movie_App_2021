//버튼 누르면 할인 가격이 나오도록 30%할인
import React, { Component } from 'react'

export class Cake extends Component {
    state = {
        price : 10000,
        discountPrice : 0
    }

    discount = () => {
        this.setState(
            current => ({
                discountPrice : current.price * 0.7
            })
        )
    }

    render() {
        return (
            <div>
                <h1>케이크 가격은 {this.state.price} 입니다.</h1>
                <button onClick={this.discount}>할인</button>
                <h2>30% 할인 가격은 {this.state.discountPrice} 입니다.</h2>
            </div>
        )
    }
}

export default Cake;