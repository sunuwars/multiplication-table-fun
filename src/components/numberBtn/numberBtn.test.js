
import React from "react";
import {fireEvent, render } from "react-testing-library";
import NumberBtn from "./index";

describe('Button integration test works', ()=> {
    const {getByText, container, getByLabelText, getByTestId} = render(<NumberBtn/>);
    it("test jest is working", ()=> {
        expect(true).toBeTruthy();
    })
    

})