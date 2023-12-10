import React from 'react';

interface formDataProps {
    name: string,
    email: string,
    number: number
}

interface InfoProps {
    formData: formDataProps,
    setFormData: Function
}

export const InfoStep: React.FC<InfoProps> = ({ formData, setFormData }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <div className="inputForm">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="e.g. Stephen King" value={formData.name} onChange={handleChange}></input>

                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder="e.g. stephenking@lorem.com" value={formData.email} onChange={handleChange}></input>

                <label htmlFor="number">Phone Number</label>
                <input type="number" name="number" placeholder="e.g. +1 234 567 890" value={formData.number} onChange={handleChange}></input>
            </div>
        </>
    );
}
