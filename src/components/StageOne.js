// src/components/StageOne.js
import React from 'react';

export default function StageOne({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <label>Full Name</label>
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      {errors.fullName && <p className="error">{errors.fullName}</p>}

      <label>Date of Birth</label>
      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}

      <label>Nationality</label>
      <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
      {errors.nationality && <p className="error">{errors.nationality}</p>}

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}
      
      <label>Phone</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      {errors.phone && <p className="error">{errors.phone}</p>}
    </div>
  );
}
