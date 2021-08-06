import React, { useState } from 'react';
import Header from '../Header/Header';
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';
import MainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import Preloader from '../Preloader/Preloader';

function ProfilePage({ onLoggedOut, onCurrentUserDataChange, loggedIn }) {
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateUserInfo(data) {
    setIsLoading(true);
    return MainApi.changeUserInfo(data)
      .then((data) => {
        onCurrentUserDataChange(data.data);
      })
      .finally(() => {
        setIsLoading(false);
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
      {isLoading &&
        <div className='profile-page__overlay'>
          <Preloader />
        </div>}
            <main className='profile-page__main'>
          <ProfileEditForm isDisabled={isLoading} onUpdateUser={handleUpdateUserInfo} />
          <button onClick={signOut} className='profile-page__exit-link hover'>
            Выйти из аккаунта
          </button>
        </main>
    </div>
  );
}

export default ProfilePage;
