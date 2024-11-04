// src/App.js
import React, { useState } from 'react';
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';
import StageThree from './components/StageThree';
import './App.css';

export default function App() {
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: '',
    emergencyContact: '',
    medicalConditions: '',
  });
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    // Validation logic for each stage
    if (currentStage === 1) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required.";
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required.";
      if (!formData.nationality) newErrors.nationality = "Nationality is required.";
      if (!formData.email) newErrors.email = "Email is required.";
      if (!formData.phone) newErrors.phone = "Phone is required.";
    } else if (currentStage === 2) {
      if (!formData.departureDate) newErrors.departureDate = "Departure Date is required.";
      if (!formData.returnDate) newErrors.returnDate = "Return Date is required.";
      if (!formData.accommodation) newErrors.accommodation = "Accommodation is required.";
    } else if (currentStage === 3) {
      if (!formData.healthDeclaration) newErrors.healthDeclaration = "Health Declaration is required.";
      if (!formData.emergencyContact) newErrors.emergencyContact = "Emergency Contact is required.";
    }

    // If there are validation errors, set them and don't proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});
    setCurrentStage(currentStage + 1);
  };

  const handleBack = () => {
    setCurrentStage(currentStage - 1);
  };

  return (
    <div>
      <h2>Mars Visit Application Form</h2>
      {currentStage === 1 && (
        <StageOne formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {currentStage === 2 && (
        <StageTwo formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {currentStage === 3 && (
        <StageThree formData={formData} setFormData={setFormData} errors={errors} />
      )}

      <div>
        {currentStage > 1 && (
          <button type="button" onClick={handleBack}>
            Back
          </button>
        )}
        {currentStage < 3 ? (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button type="button" onClick={() => alert("Form submitted!")}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
