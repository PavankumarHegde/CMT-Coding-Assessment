import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    const { name, phone, email, dob, gender, address } = formData;

    if (!name || !phone || !email || !dob || !gender || !address)
      return 'All fields are required.';
    if (!/^[a-zA-Z ]{1,15}$/.test(name)) return 'Name must be text only and max 15 characters.';
    if (!/^\d{10}$/.test(phone)) return 'Phone number must be exactly 10 digits.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address.';

    const today = new Date();
    const dobDate = new Date(dob);
    const maxDob = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    if (dobDate < maxDob) return 'Age cannot be more than 100 years.';
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

  const getMinAndMaxDOB = () => {
    const today = new Date();
    const maxDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const minDate = `${today.getFullYear() - 100}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    return { minDate, maxDate };
  };

  const { minDate, maxDate } = getMinAndMaxDOB();

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <form onSubmit={handleSubmit} className="form">
        <h2>Fill Your Details</h2>
        <input
          type="text"
          name="name"
          placeholder="* Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="* Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="* Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          min={minDate}
          max={maxDate}
          onChange={handleChange}
        />
        <p className="dob-helper">* Choose a DOB date between {minDate} and {maxDate}.</p>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled>
            * Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="address"
          placeholder="* Address"
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
