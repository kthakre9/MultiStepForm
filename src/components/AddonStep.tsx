import React from 'react';

interface formDataProps {
    name: string,
    email: string,
    number: number,
    plans: string[],
    addOns: any[]
}

interface AddonProps {
    formData: formDataProps,
    setFormData: Function
}

export const AddonStep: React.FC<AddonProps> = ({ formData, setFormData }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currAddon = event.target.name

        const tempData: string[] = [...formData.addOns]
        if (tempData.includes(currAddon)) {
            const index = tempData.indexOf(currAddon);
            tempData.splice(index, 1);
        } else {
            tempData.push(currAddon)
        }

        setFormData({
            ...formData,
            addOns: [...tempData]
        })
    }

    return (
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="addon_tiles">
                <div className={`tile_list ${formData.addOns.includes('service') ? 'tile_selected' : ''} `}>
                    <input type="checkbox" name="service" className="tile_checkboxes" value="service" onChange={handleChange} />
                    <div className="tile_info">
                        <p>Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>

                </div>
                <div className={`tile_list ${formData.addOns.includes('storage') ? 'tile_selected' : ''} `}>
                    <input type="checkbox" name="storage" className="tile_checkboxes" onChange={handleChange} />
                    <div className="tile_info">
                        <p>Larger storage</p>
                        <p>Extra 1TB of cloud storage</p>
                    </div>
                </div>
                <div className={`tile_list ${formData.addOns.includes('profile') ? 'tile_selected' : ''} `}>
                    <input type="checkbox" name="profile" className="tile_checkboxes" onChange={handleChange} />
                    <div className="tile_info">
                        <p>Customizable profile</p>
                        <p>Custom theme on your profile</p>
                    </div>
                </div>
            </div>
        </>
    );
}
