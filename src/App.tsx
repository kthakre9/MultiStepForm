import React, { useState } from 'react';

import './App.css';
import { InfoStep } from './components/InfoStep';
import { PlanStep } from './components/PlanStep';
import { AddonStep } from './components/AddonStep';
import { SummaryStep } from './components/SummaryStep'
import { StepGroup } from './components/StepGroup'

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: 0,
    plans: [],
    addOns: []
  });

  return (
    <div className="App">
      <div className="wrapper">
        <StepGroup step={step} />

        <div className="personal_info">
          {step === 1 && <InfoStep formData={formData} setFormData={setFormData} />}
          {step === 2 && <PlanStep formData={formData} setFormData={setFormData} />}
          {step === 3 && <AddonStep formData={formData} setFormData={setFormData}  />}
          {step === 4 && <SummaryStep formData={formData} />}

          <div className="button_group">
            {(step === 2 || step === 3) && <button className="back_button" onClick={() => setStep(step - 1)}>Go Back</button>}
            <button className="next_button" onClick={() => setStep(step + 1)}> {step === 4 ? 'Submit' : 'Next Step'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
