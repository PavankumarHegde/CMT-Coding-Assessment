import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    address: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const validateForm = () => {
    const { name, phone, email, dob, address } = formData;

    if (!name || !phone || !email || !dob || !address) return 'All fields are required.';
    if (!/^[a-zA-Z ]{1,15}$/.test(name)) return 'Name must be text only and max 15 characters.';
    if (!/^\d{10}$/.test(phone)) return 'Phone number must be exactly 10 digits.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address.';
    const dobDate = new Date(dob);
    const today = new Date();
    if (dobDate >= today) return 'Date of birth must be in the past.';
    if (address.length < 5) return 'Address must be at least 5 characters long.';

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
    } else {
      navigate('/form-details', { state: formData });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Fill Your Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
