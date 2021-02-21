import React, { useState } from 'react';
import PrimaryForm from './PrimaryForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

function NewResume() {
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <PrimaryForm onNext={() => setStep(2)} />;
    case 2:
      return (
        <ExperienceForm onBack={() => setStep(1)} onNext={() => setStep(3)} />
      );
    case 3:
      return (
        <EducationForm onBack={() => setStep(2)} onNext={() => setStep(4)} />
      );
    default:
      return null;
  }
}

export default NewResume;
