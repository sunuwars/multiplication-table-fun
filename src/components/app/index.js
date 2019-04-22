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

    home = () => {
        this.setState( () => {
            return { number:0 }
        })
    }
    

    render() {

        return (
            <div>
                {this.state.number === 0 &&
               (<React.Fragment>
                <div id="table-number-menu">
                <button id="table-number" onClick={this.numberSelected.bind(this, 1)}>1s table</button>
                <button id="table-number" onClick={this.numberSelected.bind(this, 2)}>2s table</button> 
                <button id="table-number" onClick={this.numberSelected.bind(this, 3)}>3s table</button>
                </div>

                <div id="table-number-menu">
                <button id="table-number" onClick={this.numberSelected.bind(this, 4)}>4s table</button>
                <button id="table-number" onClick={this.numberSelected.bind(this, 5)}>5s table</button> 
                <button id="table-number" onClick={this.numberSelected.bind(this, 6)}>6s table</button>
                </div>

                <div id="table-number-menu">
                <button id="table-number" onClick={this.numberSelected.bind(this, 7)}>7s table</button>
                <button id="table-number" onClick={this.numberSelected.bind(this, 8)}>8s table</button> 
                <button id="table-number" onClick={this.numberSelected.bind(this, 9)}>9s table</button>
                </div>

                <div id="table-number-menu">
                <button id="table-number" onClick={this.numberSelected.bind(this, 10)}>10s table</button>
                </div>


                </React.Fragment>) }

                {this.state.number !== 0 && (
                    <button id="home-btn" onClick={this.home}> home </button>
                )}

                {this.state.number === 1 && (<Table number={this.state.number} />)} 

                {this.state.number === 2 && (<Table number={this.state.number} />)} 

                {this.state.number === 3 && (<Table number={this.state.number} />)} 

                {this.state.number === 4 && (<Table number={this.state.number} />)} 

                {this.state.number === 5 && (<Table number={this.state.number} />)}

                {this.state.number === 6 && (<Table number={this.state.number} />)} 

                {this.state.number === 7 && (<Table number={this.state.number} />)} 

                {this.state.number === 8 && (<Table number={this.state.number} />)} 

                {this.state.number === 9 && (<Table number={this.state.number} />)} 

                {this.state.number === 10 && (<Table number={this.state.number} />)}

            </div>
            
        )
    }
}

