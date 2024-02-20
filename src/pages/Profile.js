
import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import ProfilePhoto from '../assest/nav-logo.jpeg';

function ProfilePage() {
  return (
    <div className="profile-page">
    <div className="profile-head">
        <h1 className='profile-headers'>My Profile</h1>
        <Link to="/edit-profile">
        <button className="edit-button">Edit Profile</button>
        </Link>
        </div>
      <div className="profile-header">
        
 <img src={ProfilePhoto} alt="" className='profile-photo' />
      </div>
      <div className="profile-details">
        <div className="detail">
          <p><strong>Name:</strong> Tarun</p>
        </div>
        <div className="detail">
          <p><strong>Role:</strong> Developer</p>
        </div>
        <div className="detail">
          <p><strong>DOB:</strong> January 13, 2000</p>
        </div>
        <div className="detail">
          <p><strong>Email:</strong> tarun05@gmail.com</p>
        </div>
        <div className="detail">
          <p><strong>Phone:</strong> 0123456789</p>
        </div>
        <div className="detail">
          <p><strong>Gender:</strong> Male</p>
        </div>
     
      </div>
    </div>
  );
}

export default ProfilePage;
