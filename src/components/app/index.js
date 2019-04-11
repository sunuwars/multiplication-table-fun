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
        correctSecondRowSum : 4,
        thirdRowSum : 0,
        correctThirdRowSum: 6,
        fourthRowSum : 0,
        correctFourthRowSum: 8,
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

    incrementNumberCountSecondRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {secondRowSum : prevState.secondRowSum + 2};
        })
    }

    decrementNumberCountSecondRow = () => { 
        this.setState( (prevState, props) => {
            return {secondRowSum : prevState.secondRowSum - 2};
        })
    }

    incrementNumberCountThirdRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {thirdRowSum : prevState.thirdRowSum + 2};
        })
    }

    decrementNumberCountThirdRow = () => { 
        this.setState( (prevState, props) => {
            return {thirdRowSum : prevState.thirdRowSum - 2};
        })
    }

    incrementNumberCountFourthRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {fourthRowSum : prevState.fourthRowSum + 2};
        })
    }

    decrementNumberCountFourthRow = () => { 
        this.setState( (prevState, props) => {
            return {fourthRowSum : prevState.fourthRowSum - 2};
        })
    }

    checkResultFunc = () => {
        this.setState( (prevState, props) => {
            return {checkResult : !prevState.checkResult}
        })
    }

    render() {
        // console.log(  "this.state.totalNumber=" , this.state.totalNumber);
        // console.log(  "this.state.firstRowSum=" , this.state.firstRowSum);
        // console.log(  "this.state.secondRowSum=" , this.state.secondRowSum);
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

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>2 * 2</h3></li>
                    <li className="table-li" data-testid="secondRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>


                    <li className="table-li" data-testid="secondRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>
                    

                    {/* <li className="table-li" data-testid="outputSumsecondRow" >{ this.state.checkResult ?this.state.secondRowSum : ""}</li> */}

                    <li className="table-li" data-testid="outputSumSecondRow" >{ this.state.secondRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.secondRowSum == this.state.correctSecondRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>3 * 2</h3></li>
                    <li className="table-li" data-testid="thirdRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>


                    <li className="table-li" data-testid="thirdRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>
                    

                    <li className="table-li" data-testid="outputSumThirdRow" >{ this.state.thirdRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.thirdRowSum == this.state.correctThirdRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>4 * 2</h3></li>
                    <li className="table-li" data-testid="fourthRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>


                    <li className="table-li" data-testid="fourthRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>
                    

                    <li className="table-li" data-testid="outputSumFourthRow" >{ this.state.fourthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.fourthRowSum == this.state.correctFourthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                 
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

