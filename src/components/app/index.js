import React from "react";
import {render} from "react-dom";
import NumberBtn from "../numberBtn"
import CorrectImg from "../../images/correct-img.svg";
import IncorrectImg from "../../images/incorrect-img.svg";

export default class App extends React.Component {
    
    state = {
        totalNumber : 0,
        firstRowSum : 0,
        correctFirstRowSum : 2,
        secondRowSum : 0,
        checkResult : false,
    }
   
    incrementNumberCount =() =>{ console.log('hello')
        
        this.setState( (prevState, props) => {
            return {totalNumber : prevState.totalNumber + 2};
        })
    }

    decrementNumberCount = () => { // console.log('decrement')
        this.setState( (prevState, props) => {
            return {totalNumber : prevState.totalNumber - 2};
        })
    }

    incrementNumberCountFirstRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {firstRowSum : prevState.firstRowSum + 2};
        })
    }

    decrementNumberCountFirstRow = () => { 
        this.setState( (prevState, props) => {
            return {firstRowSum : prevState.firstRowSum - 2};
        })
    }

    checkResultFunc = () => {
        this.setState( (prevState, props) => {
            return {checkResult : !prevState.checkResult}
        })
    }

    render() {
        // console.log(  "this.state.totalNumber=" , this.state.totalNumber);
        console.log(  "this.state.firstRowSum=" , this.state.firstRowSum);
        console.log(  "this.state.secondRowSum=" , this.state.secondRowSum);
        return (
            <React.Fragment>
                <h1 className="table-heading">Two's table</h1>
                <div id="table-div">
                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>1 * 2</h3></li>
                    <li className="table-li" data-testid="firstRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>


                    <li className="table-li" data-testid="firstRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>
                    

                    {/* <li className="table-li" data-testid="outputSumFirstRow" >{ this.state.checkResult ?this.state.firstRowSum : ""}</li> */}

                    <li className="table-li" data-testid="outputSumFirstRow" >{ this.state.firstRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.firstRowSum == this.state.correctFirstRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

               {/*  <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>2 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li> 
                </ul>  */}
                {/* <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>3 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                </ul>
                <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>4 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                </ul>
                <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>5 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                </ul>
                <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>6 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                </ul>
                <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>7 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                </ul>
                <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>8 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                </ul>
                <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>9 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                </ul>
                <ul className="table-ul">
                    <li className="table-li lot-times-number"><h3>10 * 2</h3></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li"><NumberBtn/></li>
                </ul> */}
                </div>
                <button onClick={this.checkResultFunc}>{this.state.checkResult ? "hide checking" : "check result" } </button>
            </React.Fragment>
        )
    }
}

