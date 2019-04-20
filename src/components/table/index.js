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

    componentDidMount= () => {
        this.setState( (prevState, props) => {
            const {number} = this.props;
            return { correctFirstRowSum : number *1, correctSecondRowSum : number * 2, correctThirdRowSum : number * 3,
                    correctFourthRowSum : number * 4, correctFifthRowSum : number * 5, correctSixthRowSum : number * 6,
                    correctSeventhRowSum : number * 7, correctEighthRowSum : number * 8, correctNinthRowSum : number * 9,
                    correctTenthRowSum : number * 10, tableNumber : number}

        })
    }
   
    incrementNumberCount =() =>{ console.log('hello')
        
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
                <h1 className="table-heading">{this.state.tableNumber}'s table</h1>
                <div id="table-div">
                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>1 * {this.state.tableNumber}</h3></li>
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
                    {/* if checkResult button is clicked(we want to check result), check if firstRowSum == correctFirstRowSum (if true, display correctImg, tick-image, else display IncorrectImg or exclamation-mark-image),
                    else if checkResult button is not clicked img-src= "" */}
                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.firstRowSum == this.state.correctFirstRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>2 * {this.state.tableNumber}</h3></li>
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
                    <li className="table-li lot-times-number"><h3>3 * {this.state.tableNumber}</h3></li>
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
                    <li className="table-li lot-times-number"><h3>4 * {this.state.tableNumber}</h3></li>
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

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>5 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="fifthRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>


                    <li className="table-li" data-testid="fifthRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>

                    <li className="table-li" data-testid="fifthRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountFifthRow} decrementNumberCount={this.decrementNumberCountFifthRow} /></li>
                    

                    <li className="table-li" data-testid="outputSumFifthRow" >{ this.state.fifthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.fifthRowSum == this.state.correctFifthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>6 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="sixthRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>


                    <li className="table-li" data-testid="sixthRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>

                    <li className="table-li" data-testid="sixthRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSixthRow} decrementNumberCount={this.decrementNumberCountSixthRow} /></li>
                    

                    <li className="table-li" data-testid="outputSumSixthRow" >{ this.state.sixthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.sixthRowSum == this.state.correctSixthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>7 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="seventhRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>


                    <li className="table-li" data-testid="seventhRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>

                    <li className="table-li" data-testid="seventhRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountSeventhRow} decrementNumberCount={this.decrementNumberCountSeventhRow} /></li>
                    

                    <li className="table-li" data-testid="outputSumSeventhRow" >{ this.state.seventhRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.seventhRowSum == this.state.correctSeventhRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>8 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="eighthRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>


                    <li className="table-li" data-testid="eighthRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>

                    <li className="table-li" data-testid="eighthRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountEighthRow} decrementNumberCount={this.decrementNumberCountEighthRow} /></li>
                    

                    <li className="table-li" data-testid="outputSumEighthRow" >{ this.state.eighthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.eighthRowSum == this.state.correctEighthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>

                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>9 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="ninthRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>


                    <li className="table-li" data-testid="ninthRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>

                    <li className="table-li" data-testid="ninthRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountNinthRow} decrementNumberCount={this.decrementNumberCountNinthRow} /></li>
                    

                    <li className="table-li" data-testid="outputSumNinthRow" >{ this.state.ninthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.ninthRowSum == this.state.correctNinthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>
                
                <ul className="table-ul" >
                    <li className="table-li lot-times-number"><h3>10 * {this.state.tableNumber}</h3></li>
                    <li className="table-li" data-testid="tenthRowFirstBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowSecondBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>


                    <li className="table-li" data-testid="tenthRowThirdBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowFourthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowFifthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowSixthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowSeventhBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowEighthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowNinthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>

                    <li className="table-li" data-testid="tenthRowTenthBtnContainer" ><NumberBtn incrementNumberCount={this.incrementNumberCountTenthRow} decrementNumberCount={this.decrementNumberCountTenthRow} /></li>
                    

                    <li className="table-li" data-testid="outputSumTenthRow" >{ this.state.tenthRowSum }</li>

                    <li className="table-li" data-testid="correctIncorrectImg" ><img src={ this.state.checkResult ? this.state.tenthRowSum == this.state.correctTenthRowSum ? CorrectImg: IncorrectImg  : ""} /></li>
                </ul>
                
                 
                </div>
                <button onClick={this.checkResultFunc}>{this.state.checkResult ? "hide checking" : "check result" } </button>
            </React.Fragment>
        )
    }
}

