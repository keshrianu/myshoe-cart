import React from 'react';
import PropTypes from 'prop-types';
import asd from "./Image/asd.jpg";

const Profile = ({ user }) => {
  const { name, role, email, location, joined } = user;

  return (
    <div className="cntainer">
      <div className="user-info">
        <img src={asd} alt="Profile_Picture" className="" />
        <h1>{name}</h1>
        <p>{role}</p>
      </div>

      <div className="user-details">
        <div>
          <span>Email:</span>
          <span>{email}</span>
        </div>
        <div>
          <span>Location:</span>
          <span>{location}</span>
        </div>
        <div>
          <span>Joined:</span>
          <span>{joined}</span>
        </div>
      </div>

     
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    joined: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
