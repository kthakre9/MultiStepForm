import React, { useState } from 'react';

export function SummaryStep() {
    return (
        <>
            <h1>Finishing up</h1>
            <p>Double check everything look OK before confirming</p>
            <div className="summary">
                <div className="summary_plan">
                    <p>Arcade (Monthly)</p>
                    <p>Change</p>
                </div>

                <div className="summary_addon">
                    <p>Online Service</p>
                    <p>Larger Storage</p>
                </div>
            </div>
        </>
    );
}
