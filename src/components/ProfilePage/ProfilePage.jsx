import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';

function ProfilePage() {
  return (
    <div className='profile-page'>
      <Header>
        <Navigation />
      </Header>
      <main className='profile-page__main'>
        <ProfileEditForm />
        <Link to='/signin' className='profile-page__exit-link'>
          Выйти из аккаунта
        </Link>
      </main>
    </div>
  );
}

export default ProfilePage;
