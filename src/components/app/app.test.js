
import React from "react";
import {fireEvent, render } from "react-testing-library";
import App from "./index";

describe('multiplication table integration test works', ()=> {
    const {getByText, container, getByLabelText, getByTestId} = render(<App/>);
    it("test jest is working", ()=> {
        expect(true).toBeTruthy();
    })
    
    it('checks on clicking number_button of first row, the firstRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
       
        const firstRowFirstBtnContainer = getByTestId("firstRowFirstBtnContainer");
        const toggleDottedNumberBtn = firstRowFirstBtnContainer.childNodes[0];
        fireEvent.click(toggleDottedNumberBtn);
        const outputSumFirstRow = getByTestId("outputSumFirstRow");

        expect(outputSumFirstRow.textContent).toBe("2");
        
        fireEvent.click(toggleDottedNumberBtn);
        expect(outputSumFirstRow.textContent).toBe("0");
    })

})