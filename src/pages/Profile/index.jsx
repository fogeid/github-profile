import React, { useState } from 'react';
import './index.css';

function Profile() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(res => res.json())
      .then(r => setUserData(r));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="profile__wrapper">
      <h1 className="profile__logo"><span>Github</span> Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            name="github_id"
            required
            placeholder="Enter the github user"
            value={search}
            onChange={handleChange} />
          <button className="form__btn" type="submit">Search</button>
        </div>
      </form>
      {userData && (
        <div className="user__wrapper">
          <img src={userData.avatar_url} className="user__img" alt="Profile" />
          <a href={userData.html_url} className="user__title" target="_new"><h1>{userData.name}</h1></a>
          <p className="user__description">{userData.bio}</p>
          <div className="user__infos">
            <div className="user__infos__item">
              {/* <img src={} alt="Pin Localization" /> */}
              <p>{userData.location}</p>
            </div>

            <div className="user__infos__item">
              {/* <img src={} alt="Company" /> */}
              <p>{userData.company}</p>
            </div>

            <div className="user__infos__item">
              {/* <img src={} alt="Website" /> */}
              <a href={userData.blog} target="_new">{userData.blog}</a>
            </div>
          </div>

          <div className="user__cards">
            <div className="user__cards__item">Repositories: {userData.public_repos}</div>
            <div className="user__cards__item">Followers: {userData.followers}</div>
            <div className="user__cards__item">Following: {userData.following}</div>
          </div>
        </div>
      )}
      <footer className="footer">
        <p>2021 © Developed by <a href="https://fogeid.github.io/" target="_new">Diego Batista</a></p>
      </footer>
    </div>
  );
}

export default Profile;
