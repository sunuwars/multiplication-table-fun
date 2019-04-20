import React from "react";
import {render} from "react-dom";
import Table from "../table"

export default class App extends React.Component {
    state = {
        number : 0,
    }

    numberSelected = (param, e) => { console.log('hello param=', param);  console.log('hello event=', e)
        this.setState( (prevState, props) => {  console.log("before this.num=", this.state.number)
            return {number : param }
        })
        console.log("after this.state.number=", this.state.number)
    }
    

    render() {

        return (
            <div>
                {this.state.number === 0 &&
               (<div>
                <button id="tableNumber" onClick={this.numberSelected.bind(this, 2)}>2s table</button>
                <button id="tableNumber" onClick={this.numberSelected.bind(this, 3)}>3s table</button> 
                </div>) }

                {this.state.number === 2 && (<Table/>)} 

                {this.state.number === 3 && (<h2>hello world 3</h2>)}
            </div>
            
        )
    }
}

