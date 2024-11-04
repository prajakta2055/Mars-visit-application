// src/components/Navigation.js
import React from 'react';

export default function Navigation({ currentStage, setCurrentStage, handleNext }) {
  return (
    <div className="navigation">
      {currentStage > 1 && <button onClick={() => setCurrentStage((prev) => prev - 1)}>Back</button>}
      {currentStage < 3 ? (
        <button type="button" onClick={handleNext}>Next</button> // Add type="button"
      ) : (
        <button type="submit">Submit</button>
      )}
    </div>
  );
}
