import React from "react";
import {render} from "react-dom";
import oneDots from "../../images/one-dots.svg";
import dottedNumberBtn from "../../images/two-dots.svg";
import emptyNumberBtn from "../../images/empty-dots.svg";
import threeDots from "../../images/three-dots.svg";
import fourDots from "../../images/four-dots.svg";
import fiveDots from "../../images/five-dots.svg";

import sixDots from "../../images/six-dots.svg";
import sevenDots from "../../images/seven-dots.svg";
import eightDots from "../../images/eight-dots.svg";

import nineDots from "../../images/nine-dots.svg";
import tenDots from "../../images/ten-dots.svg";



export default class NumberBtn extends React.Component{
    state = {
        showNumberDots : false,
        tableNumber : 0,
        numberDotsImg : ""
    }

    componentWillMount = () => 
    {
        this.setState( (prevState, props) => { 
            const {number} = props; //console.log("number=",number);
            var imgSrc = "";
            switch(number){
                case 1: imgSrc = "../../images/one-dots.svg";
                        break;
                case 2: imgSrc = "../../images/two-dots.svg";
                        break;
                case 3: imgSrc = "../../images/three-dots.svg";
                        break;
                case 4: imgSrc = "../../images/four-dots.svg";
                        break;
                        
                case 5: imgSrc = "../../images/five-dots.svg";
                        break;
                        
                case 6: imgSrc = "../../images/six-dots.svg";
                break;
                case 7: imgSrc = "../../images/seven-dots.svg";
                        break;
                case 8: imgSrc = "../../images/eight-dots.svg";
                        break;
                        
                case 9: imgSrc = "../../images/nine-dots.svg";
                        break;

                case 10: imgSrc = "../../images/ten-dots.svg";
                break;

                default : imgSrc = "../../images/empty-dots.svg";
                          break;               
            }
            //console.log("imgSrc=",imgSrc);
            return { tableNumber : number, numberDotsImg : imgSrc};
        } )
    }

    toggle =() => {
        this.setState( (prevState, props) => {
            const {incrementNumberCount } = props;
            const {decrementNumberCount} = props;
            //if the number did not exist('was not shown') before
            if(!prevState.showNumberDots)
                incrementNumberCount();
            //if the number exist('was shown') before
            else
                decrementNumberCount();

            return { showNumberDots: !prevState.showNumberDots };  
        } );
        
    }

    // getImg = () => { console.log("here")
    //     const num = this.state.tableNumber;
    //         switch(num){
    //         case 2: return "../../images/two-dots.svg";
    //                 break;
    //         case 3: return "../../images/three-dots.svg";
    //                 break;        
    //     }
    // }
    
    render() {
                        // console.log("this.state.numberDotsImg=",this.state.numberDotsImg);
        // console.log('this.state.showNumberDots=',this.state.showNumberDots);
        // console.log('this.state.countMeNumber=',this.state.countMeNumber);

        return (
            <div className="number-dot-btn-container" onClick={this.toggle} >
                <img data-testid="dottedImgBtn" src={this.state.showNumberDots? require(this.state.numberDotsImg) : emptyNumberBtn} ></img>

             </div>
        )
    }
}