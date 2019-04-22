
import React from "react";
import {fireEvent, render, cleanup } from "react-testing-library";
import NumberBtn from "./index";

afterEach(cleanup);

describe('Button integration test works', ()=> {
    const {getByText, container, getByLabelText, getByTestId} = render(<NumberBtn/>);
    it("test jest is working", ()=> {
        expect(true).toBeTruthy();
    });

})

  
    