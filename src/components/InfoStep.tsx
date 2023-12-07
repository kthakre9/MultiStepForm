import React, { useState } from 'react';

export function InfoStep() {

    return (
        <>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <div className="inputForm">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="e.g. Stephen King"></input>

                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder="e.g. stephenking@lorem.com"></input>

                <label htmlFor="number">Phone Number</label>
                <input type="number" name="number" placeholder="e.g. +1 234 567 890"></input>
            </div>
        </>
    );
}
