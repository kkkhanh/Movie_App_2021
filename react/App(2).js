import React from "react";
import Cake from "./Cake";

class App extends React.Component {//클래스형 컴포넌트
    constructor(props) {
        super(props);
        console.log('constructor함수는 클래스형 컴포넌트가 처음 생성할 때 호출됨')
    }
    componentDidMount() {
        console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트되면 실행되는 함수')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount함수는 컴포넌트가 죽을 때 실행되는 함수')
    }

    state = {//(클래스형 컴포넌트에서) 데이터 관리(저장, 변경)
        count: 0,
    };

    add = () => {
        // this.state.count = 1;
        // this.setState({count:1});! //state의 count속성값을 1로 바꿔라(업데이트 될 때 반드시 setState()로실행해야 render()가 실행됨)//setState()를 실행하면 자동으로 render함수 호출
        this.setState(
            current/*현재 state 값(this.state)*/ => ( {count : current.count + 1} )
        );
    }                            
    minus = () => {
        // this.state.count = -1;
        // this.setState({count:-1});
        this.setState(
            current => ( {count : current.count-1} )
        );
    }

    render() {//화면에 그려지는 부분
        return (//this:현재 컴포넌트
            <>
            <h1>The number is : {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
            <Cake />
            </>
        )
    }
}

export default App;