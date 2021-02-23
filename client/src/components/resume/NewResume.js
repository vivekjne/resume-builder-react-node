import React, { useState } from 'react';
import PrimaryForm from './PrimaryForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import Preview from './Preview';

function NewResume() {
  const [step, setStep] = useState(1);
  const [resumeState, setResumeState] = useState(null);

  function onNext(formValues) {
    setResumeState({
      ...resumeState,
      ...formValues
    });
    setStep(step + 1);
  }

  function onBack() {
    setStep(step - 1);
  }
  switch (step) {
    case 1:
      return <PrimaryForm onNext={onNext} />;
    case 2:
      return <ExperienceForm onBack={onBack} onNext={onNext} />;
    case 3:
      return <EducationForm onBack={onBack} onNext={onNext} />;
    case 4:
      return <Preview data={resumeState} onBack={onBack} />;
    default:
      return null;
  }
}

export default NewResume;
