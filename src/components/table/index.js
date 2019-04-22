import React from "react";
import {render} from "react-dom";
import NumberBtn from "../numberBtn"
import CorrectImg from "../../images/correct-img.svg";
import IncorrectImg from "../../images/incorrect-img.svg";

export default class Table extends React.Component {
    
    state = {
        tableNumber : 0,
        totalNumber : 0,
        firstRowSum : 0,
        correctFirstRowSum : 0,
        secondRowSum : 0,
        correctSecondRowSum : 0,
        thirdRowSum : 0,
        correctThirdRowSum: 0,
        fourthRowSum : 0,
        correctFourthRowSum: 0,
        fifthRowSum : 0,
        correctFifthRowSum: 0,
        sixthRowSum : 0,
        correctSixthRowSum: 0,
        seventhRowSum : 0,
        correctSeventhRowSum: 0,
        eighthRowSum : 0,
        correctEighthRowSum: 0,
        ninthRowSum : 0,
        correctNinthRowSum: 0,
        tenthRowSum : 0,
        correctTenthRowSum: 0,
        checkResult : false,
    }

    componentWillMount = () => {
        this.setState( (prevState, params) => { 
            const {number} = this.props; //console.log('number2=',number );
            return { tableNumber: number};
        })
    }

    componentDidMount= () => {
        this.setState( (prevState, props) => {
            const {number} = this.props;
            return { correctFirstRowSum : number *1, correctSecondRowSum : number * 2, correctThirdRowSum : number * 3,
                    correctFourthRowSum : number * 4, correctFifthRowSum : number * 5, correctSixthRowSum : number * 6,
                    correctSeventhRowSum : number * 7, correctEighthRowSum : number * 8, correctNinthRowSum : number * 9,
                    correctTenthRowSum : number * 10}

        })
    }
   
    incrementNumberCount =() =>{ //console.log('hello')
        
        this.setState( (prevState, props) => {
            return {totalNumber : prevState.totalNumber + prevState.tableNumber};
        })
    }

    decrementNumberCount = () => { // console.log('decrement')
        this.setState( (prevState, props) => {
            return {totalNumber : prevState.totalNumber - prevState.tableNumber};
        })
    }

    incrementNumberCountFirstRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {firstRowSum : prevState.firstRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountFirstRow = () => { 
        this.setState( (prevState, props) => {
            return {firstRowSum : prevState.firstRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountSecondRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {secondRowSum : prevState.secondRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountSecondRow = () => { 
        this.setState( (prevState, props) => {
            return {secondRowSum : prevState.secondRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountThirdRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {thirdRowSum : prevState.thirdRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountThirdRow = () => { 
        this.setState( (prevState, props) => {
            return {thirdRowSum : prevState.thirdRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountFourthRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {fourthRowSum : prevState.fourthRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountFourthRow = () => { 
        this.setState( (prevState, props) => {
            return {fourthRowSum : prevState.fourthRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountFifthRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {fifthRowSum : prevState.fifthRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountFifthRow = () => { 
        this.setState( (prevState, props) => {
            return {fifthRowSum : prevState.fifthRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountSixthRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {sixthRowSum : prevState.sixthRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountSixthRow = () => { 
        this.setState( (prevState, props) => {
            return {sixthRowSum : prevState.sixthRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountSeventhRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {seventhRowSum : prevState.seventhRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountSeventhRow = () => { 
        this.setState( (prevState, props) => {
            return {seventhRowSum : prevState.seventhRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountEighthRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {eighthRowSum : prevState.eighthRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountEighthRow = () => { 
        this.setState( (prevState, props) => {
            return {eighthRowSum : prevState.eighthRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountNinthRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {ninthRowSum : prevState.ninthRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountNinthRow = () => { 
        this.setState( (prevState, props) => {
            return {ninthRowSum : prevState.ninthRowSum - prevState.tableNumber};
        })
    }

    incrementNumberCountTenthRow =() =>{ 
        
        this.setState( (prevState, props) => {
            return {tenthRowSum : prevState.tenthRowSum + prevState.tableNumber};
        })
    }

    decrementNumberCountTenthRow = () => { 
        this.setState( (prevState, props) => {
            return {tenthRowSum : prevState.tenthRowSum - prevState.tableNumber};
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

                <button id="check-result-btn" onClick={this.checkResultFunc}>{this.state.checkResult ? "hide checking" : "check result" } </button>

                <h1 className="table-heading">{this.state.tableNumber}'s table</h1>
                <div id="table-div">
                <ul className="table-ul" >
                    <li className="table-li "><h3>1 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="firstRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>


                    <li className="table-li" data-testid="firstRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>

                    <li className="table-li" data-testid="firstRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFirstRow} decrementNumberCount={this.decrementNumberCountFirstRow} /></li>
                    

                    {/* <li className="table-li" data-testid="outputSumFirstRow" >{ this.state.checkResult ?this.state.firstRowSum : ""}</li> */}

                    <li className="table-li product" data-testid="outputSumFirstRow" >{ this.state.firstRowSum }</li>
                    {/* if checkResult button is clicked(we want to check result), check if firstRowSum == correctFirstRowSum (if true, display correctImg, tick-image, else display IncorrectImg or exclamation-mark-image),
                    else if checkResult button is not clicked img-src= "" */}
                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.firstRowSum == this.state.correctFirstRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li "><h3>2 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="secondRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>


                    <li className="table-li" data-testid="secondRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>

                    <li className="table-li" data-testid="secondRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSecondRow} decrementNumberCount={this.decrementNumberCountSecondRow} /></li>
                    

                    {/* <li className="table-li" data-testid="outputSumsecondRow" >{ this.state.checkResult ?this.state.secondRowSum : ""}</li> */}

                    <li className="table-li product" data-testid="outputSumSecondRow" >{ this.state.secondRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.secondRowSum == this.state.correctSecondRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li "><h3>3 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="thirdRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>


                    <li className="table-li" data-testid="thirdRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>

                    <li className="table-li" data-testid="thirdRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber} incrementNumberCount={this.incrementNumberCountThirdRow} decrementNumberCount={this.decrementNumberCountThirdRow} /></li>
                    

                    <li className="table-li product" data-testid="outputSumThirdRow" >{ this.state.thirdRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.thirdRowSum == this.state.correctThirdRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li "><h3>4 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="fourthRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>


                    <li className="table-li" data-testid="fourthRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>

                    <li className="table-li" data-testid="fourthRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFourthRow} decrementNumberCount={this.decrementNumberCountFourthRow} /></li>
                    

                    <li className="table-li product" data-testid="outputSumFourthRow" >{ this.state.fourthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.fourthRowSum == this.state.correctFourthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li "><h3>5 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="fifthRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>


                    <li className="table-li" data-testid="fifthRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>
                    

                    <li className="table-li product" data-testid="outputSumFifthRow" >{ this.state.fifthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.fifthRowSum == this.state.correctFifthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li "><h3>6 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="sixthRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>


                    <li className="table-li" data-testid="sixthRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>
                    

                    <li className="table-li product" data-testid="outputSumSixthRow" >{ this.state.sixthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.sixthRowSum == this.state.correctSixthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li "><h3>7 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="seventhRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>


                    <li className="table-li" data-testid="seventhRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>
                    

                    <li className="table-li product" data-testid="outputSumSeventhRow" >{ this.state.seventhRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.seventhRowSum == this.state.correctSeventhRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li "><h3>8 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="eighthRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>


                    <li className="table-li" data-testid="eighthRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>
                    

                    <li className="table-li product" data-testid="outputSumEighthRow" >{ this.state.eighthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.eighthRowSum == this.state.correctEighthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li "><h3>9 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="ninthRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>


                    <li className="table-li" data-testid="ninthRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>
                    

                    <li className="table-li product" data-testid="outputSumNinthRow" >{ this.state.ninthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.ninthRowSum == this.state.correctNinthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>
                
                <ul className="table-ul" >
                    <li className="table-li "><h3>10 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="tenthRowFirstBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowSecondBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>


                    <li className="table-li" data-testid="tenthRowThirdBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowFourthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowFifthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowSixthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowSeventhBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowEighthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowNinthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowTenthBtnContainer" ><NumberBtn number={this.state.tableNumber}  incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>
                    

                    <li className="table-li product" data-testid="outputSumTenthRow" >{ this.state.tenthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.tenthRowSum == this.state.correctTenthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>
                
                 
                </div>

                 
                
            </React.Fragment>
        )
    }
}

