
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

    it('checks on clicking all ten number_buttons of SECOND row, the secondRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const secondRowFirstBtnContainer = getByTestId("secondRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = secondRowFirstBtnContainer.childNodes[0];

        const secondRowSecondBtnContainer = getByTestId("secondRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = secondRowSecondBtnContainer.childNodes[0];

        const secondRowThirdBtnContainer = getByTestId("secondRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = secondRowThirdBtnContainer.childNodes[0];
        
        const secondRowFourthBtnContainer = getByTestId("secondRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = secondRowFourthBtnContainer.childNodes[0];

        const secondRowFifthBtnContainer = getByTestId("secondRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = secondRowFifthBtnContainer.childNodes[0];

        const secondRowSixthBtnContainer = getByTestId("secondRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = secondRowSixthBtnContainer.childNodes[0];

        const secondRowSeventhBtnContainer = getByTestId("secondRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = secondRowSeventhBtnContainer.childNodes[0];

        const secondRowEighthBtnContainer = getByTestId("secondRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = secondRowEighthBtnContainer.childNodes[0];

        const secondRowNinthBtnContainer = getByTestId("secondRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = secondRowNinthBtnContainer.childNodes[0];

        const secondRowTenthBtnContainer = getByTestId("secondRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = secondRowTenthBtnContainer.childNodes[0];

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
        const outputSumSecondRow = getByTestId("outputSumSecondRow");
        //when the dotted buttons are shown, the SecondRowSum is incremented by 20
        expect(outputSumSecondRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the SecondRowSum is decremented by 20
        expect(outputSumSecondRow.textContent).toBe("0");
        
    });

    it('checks on clicking all ten number_buttons of THIRD row, the thirdRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const thirdRowFirstBtnContainer = getByTestId("thirdRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = thirdRowFirstBtnContainer.childNodes[0];

        const thirdRowSecondBtnContainer = getByTestId("thirdRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = thirdRowSecondBtnContainer.childNodes[0];

        const thirdRowThirdBtnContainer = getByTestId("thirdRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = thirdRowThirdBtnContainer.childNodes[0];
        
        const thirdRowFourthBtnContainer = getByTestId("thirdRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = thirdRowFourthBtnContainer.childNodes[0];

        const thirdRowFifthBtnContainer = getByTestId("thirdRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = thirdRowFifthBtnContainer.childNodes[0];

        const thirdRowSixthBtnContainer = getByTestId("thirdRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = thirdRowSixthBtnContainer.childNodes[0];

        const thirdRowSeventhBtnContainer = getByTestId("thirdRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = thirdRowSeventhBtnContainer.childNodes[0];

        const thirdRowEighthBtnContainer = getByTestId("thirdRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = thirdRowEighthBtnContainer.childNodes[0];

        const thirdRowNinthBtnContainer = getByTestId("thirdRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = thirdRowNinthBtnContainer.childNodes[0];

        const thirdRowTenthBtnContainer = getByTestId("thirdRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = thirdRowTenthBtnContainer.childNodes[0];

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
        const outputSumThirdRow = getByTestId("outputSumThirdRow");
        //when the dotted buttons are shown, the ThirdRowSum is incremented by 20
        expect(outputSumThirdRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the ThirdRowSum is decremented by 20
        expect(outputSumThirdRow.textContent).toBe("0");
        
    });

    it('checks on clicking all ten number_buttons of FOURTH row, the fourthRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const fourthRowFirstBtnContainer = getByTestId("fourthRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = fourthRowFirstBtnContainer.childNodes[0];

        const fourthRowSecondBtnContainer = getByTestId("fourthRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = fourthRowSecondBtnContainer.childNodes[0];

        const fourthRowThirdBtnContainer = getByTestId("fourthRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = fourthRowThirdBtnContainer.childNodes[0];
        
        const fourthRowFourthBtnContainer = getByTestId("fourthRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = fourthRowFourthBtnContainer.childNodes[0];

        const fourthRowFifthBtnContainer = getByTestId("fourthRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = fourthRowFifthBtnContainer.childNodes[0];

        const fourthRowSixthBtnContainer = getByTestId("fourthRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = fourthRowSixthBtnContainer.childNodes[0];

        const fourthRowSeventhBtnContainer = getByTestId("fourthRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = fourthRowSeventhBtnContainer.childNodes[0];

        const fourthRowEighthBtnContainer = getByTestId("fourthRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = fourthRowEighthBtnContainer.childNodes[0];

        const fourthRowNinthBtnContainer = getByTestId("fourthRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = fourthRowNinthBtnContainer.childNodes[0];

        const fourthRowTenthBtnContainer = getByTestId("fourthRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = fourthRowTenthBtnContainer.childNodes[0];

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
        const outputSumFourthRow = getByTestId("outputSumFourthRow");
        //when the dotted buttons are shown, the FourthRowSum is incremented by 20
        expect(outputSumFourthRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the FourthRowSum is decremented by 20
        expect(outputSumFourthRow.textContent).toBe("0");
        
    });


})