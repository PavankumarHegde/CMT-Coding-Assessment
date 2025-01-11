import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/FormDetails.css';
import avatarImage from '../assets/avatar.png'; // Replace with your actual avatar image

const FormDetails = () => {
  const location = useLocation();
  const state = location?.state || {};
  const { name = "Hembo Tingor", phone = "9897989898", email = "rntng@gmail.com", address = "My address" } = state;

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-left">
          <img src={avatarImage} alt="Avatar" className="details-avatar" />
          <p className="details-name">{name}</p>
          <p className="details-gender">Male</p>
        </div>
        <div className="details-right">
          <p className="details-heading">Information</p>
          <div className="details-row two-column">
            <div>
              <p className="details-heading1">Email</p>
              <p className="details-value">{email}</p>
            </div>
            <div>
              <p className="details-heading1">Phone</p>
              <p className="details-value">{phone}</p>
            </div>
          </div>
            <p className="details-heading1">Address</p>
            <p className="details-value">{address}</p>
          
        </div>
      </div>
    </div>
  );
};

export default FormDetails;
