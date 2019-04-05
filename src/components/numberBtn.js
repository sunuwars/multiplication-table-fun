import React from "react";
import {render} from "react-dom";
import numberBtn from "../images/two-dots.svg";
import emptyNumberBtn from "../images/empty-dots.svg";

export default class NumberBtn extends React.Component{
    state = {
        showNumber : false

    }
    

    toggle =() => {
        this.setState( (prevState, props) => {
            
                // this.state.showNumber = !this.prevState.showNumber;
                return { showNumber: !prevState.showNumber };
            
        } );
        
    //     return { showZombie: !prevState.showZombie };
    // });
        
    }
    
    render() {
        console.log('this.state.showNumber=',this.state.showNumber);
        return (
            <div className="number-dot-btn-container">
                <img src={this.state.showNumber ? numberBtn : emptyNumberBtn} onClick={this.toggle}></img>

            </div>
        )
    }
}