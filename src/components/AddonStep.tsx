import React, { useState } from 'react';

export function AddonStep() {
    return (
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="addon_tiles">
                <div className="tile_list">
                    <input type="checkbox" name="service" className="tile_checkboxes" value="service" />
                    <div className="tile_info">
                        <p>Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>

                </div>
                <div className="tile_list">
                    <input type="checkbox" name="storage" className="tile_checkboxes" />
                    <div className="tile_info">
                        <p>Larger storage</p>
                        <p>Extra 1TB of cloud storage</p>
                    </div>
                </div>
                <div className="tile_list">
                    <input type="checkbox" name="profile" className="tile_checkboxes" />
                    <div className="tile_info">
                        <p>Customizable profile</p>
                        <p>Custom theme on your profile</p>
                    </div>
                </div>
            </div>
        </>
    );
}
