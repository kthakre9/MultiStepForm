import React from 'react';

interface StepProps {
    step: number
}

export const StepGroup: React.FC<StepProps> = ({ step }) => {
    return (
        <div className="step_wrapper">
            <div className="step1">
                <div className={`circle ${step === 1 ? "circle_selected" : ''}`}><p>1</p></div>
                <div className="step_text">
                    <p>STEP 1</p>
                    <p>YOUR INFO</p>
                </div>
            </div>

            <div className="step1">
                <div className={`circle ${step === 2 ? "circle_selected" : ''}`}><p>2</p></div>
                <div className="step_text">
                    <p>STEP 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </div>

            <div className="step1">
                <div className={`circle ${step === 3 ? "circle_selected" : ''}`}><p>3</p></div>
                <div className="step_text">
                    <p>STEP 3</p>
                    <p>ADD-ONS</p>
                </div>
            </div>

            <div className="step1">
                <div className={`circle ${step === 4 ? "circle_selected" : ''}`}><p>4</p></div>
                <div className="step_text">
                    <p>STEP 4</p>
                    <p>SUMMARY</p>
                </div>
            </div>
        </div>
    );
}
