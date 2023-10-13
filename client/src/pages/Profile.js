import React from 'react';
//import profiles from '../../server/seeds/profileSeeds.json';

class Profile extends React.Component {
  render() {
    let profileData = {} // If we want to display the first profile or we can change it to display all profile?

    return (
      <div>
        <h1>Profile</h1>
        <div>
          <img
            src={profileData.profilePicture} // Will need actual URL for the profile picture.
            alt="Profile Picture"
            style={{ width: '150px', borderRadius: '50%' }}
          />
          <h2>Name: {profileData.name}</h2>
          <p>Bio: {profileData.bio}</p>
          <p>Projects: {profileData.projects}</p>
          <p>Organizations: {profileData.organizations}</p>
        </div>
      </div>
    );
  }
}

export default Profile;


// First edit to Profile.js. I'm still unsure if I did this correctly. Needs more work done.