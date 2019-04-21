
import React from "react";
import {fireEvent, render, cleanup } from "react-testing-library";
import Table from "./index";

// afterEach(cleanup);

describe('multiplication table integration test works', ()=> {
    const {getByText, container, getByLabelText, getByTestId} = render(<Table number={2} />);
    
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

    it('checks on clicking all ten number_buttons of FIFTH row, the fifthRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const fifthRowFirstBtnContainer = getByTestId("fifthRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = fifthRowFirstBtnContainer.childNodes[0];

        const fifthRowSecondBtnContainer = getByTestId("fifthRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = fifthRowSecondBtnContainer.childNodes[0];

        const fifthRowThirdBtnContainer = getByTestId("fifthRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = fifthRowThirdBtnContainer.childNodes[0];
        
        const fifthRowFourthBtnContainer = getByTestId("fifthRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = fifthRowFourthBtnContainer.childNodes[0];

        const fifthRowFifthBtnContainer = getByTestId("fifthRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = fifthRowFifthBtnContainer.childNodes[0];

        const fifthRowSixthBtnContainer = getByTestId("fifthRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = fifthRowSixthBtnContainer.childNodes[0];

        const fifthRowSeventhBtnContainer = getByTestId("fifthRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = fifthRowSeventhBtnContainer.childNodes[0];

        const fifthRowEighthBtnContainer = getByTestId("fifthRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = fifthRowEighthBtnContainer.childNodes[0];

        const fifthRowNinthBtnContainer = getByTestId("fifthRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = fifthRowNinthBtnContainer.childNodes[0];

        const fifthRowTenthBtnContainer = getByTestId("fifthRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = fifthRowTenthBtnContainer.childNodes[0];

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
        const outputSumFifthRow = getByTestId("outputSumFifthRow");
        //when the dotted buttons are shown, the FifthRowSum is incremented by 20
        expect(outputSumFifthRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the FifthRowSum is decremented by 20
        expect(outputSumFifthRow.textContent).toBe("0");
        
    });

    it('checks on clicking all ten number_buttons of SIXTH row, the sixthRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const sixthRowFirstBtnContainer = getByTestId("sixthRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = sixthRowFirstBtnContainer.childNodes[0];

        const sixthRowSecondBtnContainer = getByTestId("sixthRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = sixthRowSecondBtnContainer.childNodes[0];

        const sixthRowThirdBtnContainer = getByTestId("sixthRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = sixthRowThirdBtnContainer.childNodes[0];
        
        const sixthRowFourthBtnContainer = getByTestId("sixthRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = sixthRowFourthBtnContainer.childNodes[0];

        const sixthRowFifthBtnContainer = getByTestId("sixthRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = sixthRowFifthBtnContainer.childNodes[0];

        const sixthRowSixthBtnContainer = getByTestId("sixthRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = sixthRowSixthBtnContainer.childNodes[0];

        const sixthRowSeventhBtnContainer = getByTestId("sixthRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = sixthRowSeventhBtnContainer.childNodes[0];

        const sixthRowEighthBtnContainer = getByTestId("sixthRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = sixthRowEighthBtnContainer.childNodes[0];

        const sixthRowNinthBtnContainer = getByTestId("sixthRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = sixthRowNinthBtnContainer.childNodes[0];

        const sixthRowTenthBtnContainer = getByTestId("sixthRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = sixthRowTenthBtnContainer.childNodes[0];

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
        const outputSumSixthRow = getByTestId("outputSumSixthRow");
        //when the dotted buttons are shown, the SixthRowSum is incremented by 20
        expect(outputSumSixthRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the SixthRowSum is decremented by 20
        expect(outputSumSixthRow.textContent).toBe("0");
        
    });

    it('checks on clicking all ten number_buttons of SEVENTH row, the seventhRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const seventhRowFirstBtnContainer = getByTestId("seventhRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = seventhRowFirstBtnContainer.childNodes[0];

        const seventhRowSecondBtnContainer = getByTestId("seventhRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = seventhRowSecondBtnContainer.childNodes[0];

        const seventhRowThirdBtnContainer = getByTestId("seventhRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = seventhRowThirdBtnContainer.childNodes[0];
        
        const seventhRowFourthBtnContainer = getByTestId("seventhRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = seventhRowFourthBtnContainer.childNodes[0];

        const seventhRowFifthBtnContainer = getByTestId("seventhRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = seventhRowFifthBtnContainer.childNodes[0];

        const seventhRowSixthBtnContainer = getByTestId("seventhRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = seventhRowSixthBtnContainer.childNodes[0];

        const seventhRowSeventhBtnContainer = getByTestId("seventhRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = seventhRowSeventhBtnContainer.childNodes[0];

        const seventhRowEighthBtnContainer = getByTestId("seventhRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = seventhRowEighthBtnContainer.childNodes[0];

        const seventhRowNinthBtnContainer = getByTestId("seventhRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = seventhRowNinthBtnContainer.childNodes[0];

        const seventhRowTenthBtnContainer = getByTestId("seventhRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = seventhRowTenthBtnContainer.childNodes[0];

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
        const outputSumSeventhRow = getByTestId("outputSumSeventhRow");
        //when the dotted buttons are shown, the SeventhRowSum is incremented by 20
        expect(outputSumSeventhRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the SeventhRowSum is decremented by 20
        expect(outputSumSeventhRow.textContent).toBe("0");
        
    });

    it('checks on clicking all ten number_buttons of EIGHTH row, the eighthRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const eighthRowFirstBtnContainer = getByTestId("eighthRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = eighthRowFirstBtnContainer.childNodes[0];

        const eighthRowSecondBtnContainer = getByTestId("eighthRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = eighthRowSecondBtnContainer.childNodes[0];

        const eighthRowThirdBtnContainer = getByTestId("eighthRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = eighthRowThirdBtnContainer.childNodes[0];
        
        const eighthRowFourthBtnContainer = getByTestId("eighthRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = eighthRowFourthBtnContainer.childNodes[0];

        const eighthRowFifthBtnContainer = getByTestId("eighthRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = eighthRowFifthBtnContainer.childNodes[0];

        const eighthRowSixthBtnContainer = getByTestId("eighthRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = eighthRowSixthBtnContainer.childNodes[0];

        const eighthRowSeventhBtnContainer = getByTestId("eighthRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = eighthRowSeventhBtnContainer.childNodes[0];

        const eighthRowEighthBtnContainer = getByTestId("eighthRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = eighthRowEighthBtnContainer.childNodes[0];

        const eighthRowNinthBtnContainer = getByTestId("eighthRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = eighthRowNinthBtnContainer.childNodes[0];

        const eighthRowTenthBtnContainer = getByTestId("eighthRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = eighthRowTenthBtnContainer.childNodes[0];

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
        const outputSumEighthRow = getByTestId("outputSumEighthRow");
        //when the dotted buttons are shown, the EighthRowSum is incremented by 20
        expect(outputSumEighthRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the EighthRowSum is decremented by 20
        expect(outputSumEighthRow.textContent).toBe("0");
        
    });

    it('checks on clicking all ten number_buttons of NINTH row, the ninthRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const ninthRowFirstBtnContainer = getByTestId("ninthRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = ninthRowFirstBtnContainer.childNodes[0];

        const ninthRowSecondBtnContainer = getByTestId("ninthRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = ninthRowSecondBtnContainer.childNodes[0];

        const ninthRowThirdBtnContainer = getByTestId("ninthRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = ninthRowThirdBtnContainer.childNodes[0];
        
        const ninthRowFourthBtnContainer = getByTestId("ninthRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = ninthRowFourthBtnContainer.childNodes[0];

        const ninthRowFifthBtnContainer = getByTestId("ninthRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = ninthRowFifthBtnContainer.childNodes[0];

        const ninthRowSixthBtnContainer = getByTestId("ninthRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = ninthRowSixthBtnContainer.childNodes[0];

        const ninthRowSeventhBtnContainer = getByTestId("ninthRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = ninthRowSeventhBtnContainer.childNodes[0];

        const ninthRowEighthBtnContainer = getByTestId("ninthRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = ninthRowEighthBtnContainer.childNodes[0];

        const ninthRowNinthBtnContainer = getByTestId("ninthRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = ninthRowNinthBtnContainer.childNodes[0];

        const ninthRowTenthBtnContainer = getByTestId("ninthRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = ninthRowTenthBtnContainer.childNodes[0];

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
        const outputSumNinthRow = getByTestId("outputSumNinthRow");
        //when the dotted buttons are shown, the NinthRowSum is incremented by 20
        expect(outputSumNinthRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the NinthRowSum is decremented by 20
        expect(outputSumNinthRow.textContent).toBe("0");
        
    });

    it('checks on clicking all ten number_buttons of TENTH row, the tenthRowSum increments/decrements if number-dot shown/not-shown ',  ()=> {
        const tenthRowFirstBtnContainer = getByTestId("tenthRowFirstBtnContainer");
        const toggleFirstDottedNumberBtn = tenthRowFirstBtnContainer.childNodes[0];

        const tenthRowSecondBtnContainer = getByTestId("tenthRowSecondBtnContainer");
        const toggleSecondDottedNumberBtn = tenthRowSecondBtnContainer.childNodes[0];

        const tenthRowThirdBtnContainer = getByTestId("tenthRowThirdBtnContainer");
        const toggleThirdDottedNumberBtn = tenthRowThirdBtnContainer.childNodes[0];
        
        const tenthRowFourthBtnContainer = getByTestId("tenthRowFourthBtnContainer");
        const toggleFourthDottedNumberBtn = tenthRowFourthBtnContainer.childNodes[0];

        const tenthRowFifthBtnContainer = getByTestId("tenthRowFifthBtnContainer");
        const toggleFifthDottedNumberBtn = tenthRowFifthBtnContainer.childNodes[0];

        const tenthRowSixthBtnContainer = getByTestId("tenthRowSixthBtnContainer");
        const toggleSixthDottedNumberBtn = tenthRowSixthBtnContainer.childNodes[0];

        const tenthRowSeventhBtnContainer = getByTestId("tenthRowSeventhBtnContainer");
        const toggleSeventhDottedNumberBtn = tenthRowSeventhBtnContainer.childNodes[0];

        const tenthRowEighthBtnContainer = getByTestId("tenthRowEighthBtnContainer");
        const toggleEighthDottedNumberBtn = tenthRowEighthBtnContainer.childNodes[0];

        const tenthRowNinthBtnContainer = getByTestId("tenthRowNinthBtnContainer");
        const toggleNinthDottedNumberBtn = tenthRowNinthBtnContainer.childNodes[0];

        const tenthRowTenthBtnContainer = getByTestId("tenthRowTenthBtnContainer");
        const toggleTenthDottedNumberBtn = tenthRowTenthBtnContainer.childNodes[0];

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
        const outputSumTenthRow = getByTestId("outputSumTenthRow");
        //when the dotted buttons are shown, the TenthRowSum is incremented by 20
        expect(outputSumTenthRow.textContent).toBe("20");
        
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
        //when the dotted buttons are not shown(toggled), the TenthRowSum is decremented by 20
        expect(outputSumTenthRow.textContent).toBe("0");
        
    });

})