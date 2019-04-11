
import React from "react";
import {fireEvent, render, cleanup } from "react-testing-library";
import App from "./index";

// afterEach(cleanup);

describe('multiplication table integration test works', ()=> {
    const {getByText, container, getByLabelText, getByTestId} = render(<App/>);
    it("test jest is working", ()=> {
        expect(true).toBeTruthy();
    })
    
    it('checks on clicking first number_button of first row, the firstRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
       
        const firstRowFirstBtnContainer = getByTestId("firstRowFirstBtnContainer");
        const toggleDottedNumberBtn = firstRowFirstBtnContainer.childNodes[0];
        fireEvent.click(toggleDottedNumberBtn);
        const outputSumFirstRow = getByTestId("outputSumFirstRow");
        //when the dotted button is shown, the firstRowSum is incremented by 2
        expect(outputSumFirstRow.textContent).toBe("2");
        
        fireEvent.click(toggleDottedNumberBtn);
        //when the dotted button is not shown(toggled), the firstRowSum is decremented by 2
        expect(outputSumFirstRow.textContent).toBe("0");
    })

    it('checks on clicking second number_button of first row, the firstRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const firstRowSecondBtnContainer = getByTestId("firstRowSecondBtnContainer");
        const toggleDottedNumberBtn = firstRowSecondBtnContainer.childNodes[0];

        fireEvent.click(toggleDottedNumberBtn);
        const outputSumFirstRow = getByTestId("outputSumFirstRow");
        //when the dotted button is shown, the firstRowSum is incremented by 2
        expect(outputSumFirstRow.textContent).toBe("2");
        
        fireEvent.click(toggleDottedNumberBtn);
        //when the dotted button is not shown(toggled), the firstRowSum is decremented by 2
        expect(outputSumFirstRow.textContent).toBe("0");
    })

    it('checks on clicking first and second number_buttons of first row, the firstRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const firstRowFirstBtnContainer = getByTestId("firstRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = firstRowFirstBtnContainer.childNodes[0];

        const firstRowSecondBtnContainer = getByTestId("firstRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = firstRowSecondBtnContainer.childNodes[0];

        fireEvent.click(toggleFirstDottedNumberBtn);
        fireEvent.click(toggleSecondDottedNumberBtn);

        const outputSumFirstRow = getByTestId("outputSumFirstRow");
        //when two dotted buttons are shown, the firstRowSum is incremented by 4
        expect(outputSumFirstRow.textContent).toBe("4");
        
        fireEvent.click(toggleFirstDottedNumberBtn);
        fireEvent.click(toggleSecondDottedNumberBtn);
        //when two dotted buttons are not shown(toggled), the firstRowSum is decremented by 4
        expect(outputSumFirstRow.textContent).toBe("0");
    })

    it('checks on clicking all ten number_buttons of first row, the firstRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const firstRowFirstBtnContainer = getByTestId("firstRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = firstRowFirstBtnContainer.childNodes[0];

        const firstRowSecondBtnContainer = getByTestId("firstRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = firstRowSecondBtnContainer.childNodes[0];

        const firstRowThirdBtnContainer = getByTestId("firstRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = firstRowThirdBtnContainer.childNodes[0];
        
        const firstRowFourthBtnContainer = getByTestId("firstRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = firstRowFourthBtnContainer.childNodes[0];

        const firstRowFifthBtnContainer = getByTestId("firstRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = firstRowFifthBtnContainer.childNodes[0];

        const firstRowSixthBtnContainer = getByTestId("firstRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = firstRowSixthBtnContainer.childNodes[0];

        const firstRowSeventhBtnContainer = getByTestId("firstRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = firstRowSeventhBtnContainer.childNodes[0];

        const firstRowEighthBtnContainer = getByTestId("firstRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = firstRowEighthBtnContainer.childNodes[0];

        const firstRowNinthBtnContainer = getByTestId("firstRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = firstRowNinthBtnContainer.childNodes[0];

        const firstRowTenthBtnContainer = getByTestId("firstRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = firstRowTenthBtnContainer.childNodes[0];

        fireEvent.click(toggleFirstDottedNumberBtn);
        fireEvent.click(toggleSecondDottedNumberBtn);
        fireEvent.click(toggleThirdDottedNumberBtn);
        fireEvent.click(toggleFourthDottedNumberBtn);
        fireEvent.click(toggleFifthDottedNumberBtn);
        fireEvent.click(toggleSixthDottedNumberBtn);
        fireEvent.click(toggleSeventhDottedNumberBtn);
        fireEvent.click(toggleEighthDottedNumberBtn);
        fireEvent.click(toggleNinthDottedNumberBtn);
        fireEvent.click(toggleTenthDottedNumberBtn);
        const outputSumFirstRow = getByTestId("outputSumFirstRow");
        //when the dotted buttons are shown, the firstRowSum is incremented by 20
        expect(outputSumFirstRow.textContent).toBe("20");
        
        fireEvent.click(toggleFirstDottedNumberBtn);
        fireEvent.click(toggleSecondDottedNumberBtn);
        fireEvent.click(toggleThirdDottedNumberBtn);
        fireEvent.click(toggleFourthDottedNumberBtn);
        fireEvent.click(toggleFifthDottedNumberBtn);
        fireEvent.click(toggleSixthDottedNumberBtn);
        fireEvent.click(toggleSeventhDottedNumberBtn);
        fireEvent.click(toggleEighthDottedNumberBtn);
        fireEvent.click(toggleNinthDottedNumberBtn);
        fireEvent.click(toggleTenthDottedNumberBtn);
        //when the dotted buttons are not shown(toggled), the firstRowSum is decremented by 20
        expect(outputSumFirstRow.textContent).toBe("0");
        
        
    });


})