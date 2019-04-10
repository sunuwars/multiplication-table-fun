import React from "react";
import {render} from "react-dom";
import dottedNumberBtn from "../../images/two-dots.svg";
import emptyNumberBtn from "../../images/empty-dots.svg";

export default class NumberBtn extends React.Component{
    state = {
        showNumberDots : false,
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
    
    render() {
        // console.log('this.state.showNumberDots=',this.state.showNumberDots);
        // console.log('this.state.countMeNumber=',this.state.countMeNumber);

        return (
            // <div className="number-dot-btn-container" >
                <img data-testid="dottedImgBtn" src={this.state.showNumberDots ? dottedNumberBtn : emptyNumberBtn} onClick={this.toggle} ></img>

            // </div>
        )
    }
}