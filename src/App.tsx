import React, { useState } from 'react';

import './App.css';
import { InfoStep } from './components/InfoStep';
import { PlanStep } from './components/PlanStep';
import { AddonStep } from './components/AddonStep';
import { SummaryStep } from './components/SummaryStep'
import { StepGroup } from './components/StepGroup'

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <div className="wrapper">
        <StepGroup />

        <div className="personal_info">
          {step === 1 && <InfoStep />}
          {step === 2 && <PlanStep />}
          {step === 3 && <AddonStep />}
          {step === 4 && <SummaryStep />}

          <div className="button_group">
            <button className="back_button">Go Back</button>
            <button className="next_button" onClick={() => setStep(step + 1)}>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
