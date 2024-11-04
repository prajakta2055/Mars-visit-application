// src/components/StageTwo.js
import React from 'react';

export default function StageTwo({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Travel Preferences</h2>
      <label>Departure Date</label>
      <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} />
      {errors.departureDate && <p className="error">{errors.departureDate}</p>}

      <label>Return Date</label>
      <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} />
      {errors.returnDate && <p className="error">{errors.returnDate}</p>}

      <label>Accommodation Preference</label>
      <select name="accommodation" value={formData.accommodation} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="Space Hotel">Space Hotel</option>
        <option value="Martian Base">Martian Base</option>
      </select>
      {errors.accommodation && <p className="error">{errors.accommodation}</p>}

      <label>Special Requests</label>
      <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} />
    </div>
  );
}
