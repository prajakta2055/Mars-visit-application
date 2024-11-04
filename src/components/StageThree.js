// src/components/StageThree.js
import React from 'react';

export default function StageThree({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Health and Safety</h2>
      <label>Health Declaration</label>
      <select name="healthDeclaration" value={formData.healthDeclaration} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      {errors.healthDeclaration && <p className="error">{errors.healthDeclaration}</p>}

      <label>Emergency Contact Information</label>
      <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
      {errors.emergencyContact && <p className="error">{errors.emergencyContact}</p>}

      <label>Any Medical Conditions</label>
      <textarea name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} />
    </div>
  );
}
