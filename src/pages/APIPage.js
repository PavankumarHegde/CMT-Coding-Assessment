import React, { useState } from 'react';
import '../styles/APIPage.css';

const APIPage = () => {
  const [user, setUser] = useState(null);

  const fetchUserDetails = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setUser(data.results[0]);
  };

  return (
    <div className="api-container">
      <button className="fetch-button" onClick={fetchUserDetails}>
        Fetch User Details
      </button>
      {user && (
        <div className="details-card">
          <div className="details-left">
            <img src={user.picture.large} alt="Avatar" className="details-avatar" />
            <p className="details-name">{`${user.name.first} ${user.name.last}`}</p>
            <p className="details-gender">{user.gender}</p>
          </div>
          <div className="details-right">
            <p className="details-heading">Information</p>
            <div className="details-row two-column">
              <div>
                <p className="details-heading1">Email</p>
                <p className="details-value">{user.email}</p>
              </div>
              <div>
                <p className="details-heading1">Phone</p>
                <p className="details-value">{user.phone}</p>
              </div>
            </div>
              <p className="details-heading1">Address</p>
              <p className="details-value">{`${user.location.street.name}, ${user.location.city}`}</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default APIPage;
