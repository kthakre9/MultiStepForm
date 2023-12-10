import React from 'react';

interface formDataProps {
    name: string,
    email: string,
    number: number,
    plans: string[],
    addOns: any[]
}

interface SummaryProps {
    formData: formDataProps,
}

export const SummaryStep: React.FC<SummaryProps> = ({ formData }) => {

    return (
        <>
            <h1>Finishing up</h1>
            <p>Double check everything look OK before confirming</p>
            <div className="summary">
                <div className="summary_plan">
                    {formData.plans.map((item) => {
                        return (
                            <>
                                <p>{item}</p>
                                <p>Change</p>
                            </>
                        )
                    })}
                </div>

                <div className="summary_addon">

                    {formData.addOns.map((item) => {
                        return (
                            <>
                                <p>{item}</p>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
