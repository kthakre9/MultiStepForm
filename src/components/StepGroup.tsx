import React, { useState } from 'react';

export function StepGroup() {

    return (
        <div className="step_wrapper">
            <div className="step1">
                <div className="circle circle_selected"><p>1</p></div>
                <div className="step_text">
                    <p>STEP 1</p>
                    <p>YOUR INFO</p>
                </div>
            </div>

            <div className="step1">
                <div className="circle"><p>2</p></div>
                <div className="step_text">
                    <p>STEP 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </div>

            <div className="step1">
                <div className="circle"><p>3</p></div>
                <div className="step_text">
                    <p>STEP 3</p>
                    <p>ADD-ONS</p>
                </div>
            </div>

            <div className="step1">
                <div className="circle"><p>4</p></div>
                <div className="step_text">
                    <p>STEP 4</p>
                    <p>SUMMARY</p>
                </div>
            </div>
        </div>
    );
}
