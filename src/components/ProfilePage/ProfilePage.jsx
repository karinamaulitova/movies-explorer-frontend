import React from 'react';
import Header from '../Header/Header';
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';
import MainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';

function ProfilePage({ onLoggedOut, onCurrentUserDataChange, loggedIn }) {
  function handleUpdateUserInfo(data) {
    MainApi.changeUserInfo(data)
      .then((data) => {
        onCurrentUserDataChange(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signOut(e) {
    e.preventDefault();
    auth.logout();
    onLoggedOut();
  }
  return (
    <div className='profile-page'>
      <Header loggedIn={loggedIn} />
      <main className='profile-page__main'>
        <ProfileEditForm onUpdateUser={handleUpdateUserInfo} />
        <button onClick={signOut} className='profile-page__exit-link hover'>
          Выйти из аккаунта
        </button>
      </main>
    </div>
  );
}

export default ProfilePage;
