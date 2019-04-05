import React from "react";
import {render} from "react-dom";
import NumberBtn from "./numberBtn"

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Twos table</h1>
                <div id="table-div">
                <ul className="table-ul">
                    <li className="table-li"><NumberBtn/></li>
                    <li className="table-li">hello</li>
                    <li className="table-li">hello</li>
                    <li className="table-li">hello</li>
                    <li className="table-li">hello</li>
                    <li className="table-li">hello</li>
                    <li className="table-li">hello</li>
                    <li className="table-li">hello</li>
                    <li className="table-li">hello</li>
                    <li className="table-li">hello</li>
                </ul>
                </div>
            </React.Fragment>
        )
    }
}

{/* <p>hello hello hello hello</p> */}