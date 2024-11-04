// src/validation.js

export const isRequired = (value) => value && value.trim() !== '';

export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const isValidPhone = (phone) => {
  const phonePattern = /^[0-9]{10,15}$/;
  return phonePattern.test(phone);
};

export const isValidDate = (date) => {
  return !isNaN(new Date(date).getTime());
};

export const isValidHealthDeclaration = (declaration) => {
  return declaration === 'Yes' || declaration === 'No';
};
