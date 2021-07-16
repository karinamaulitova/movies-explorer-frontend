import React, { useState } from 'react';

function ProfileEditForm() {
  const [name, setName] = useState('Карина');
  const [email, setEmail] = useState('pochta@yandex.ru');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section className='profile-edit'>
      <h2 className='profile-edit__heading'>{`Привет, ${name}!`}</h2>
      <form
        className='profile-edit__form'
        id='profile-edit-form'
        name='profile-edit'
        noValidate
      >
        <div className='profile-edit__input-wrapper'>
          <label className='profile-edit__label' htmlFor='name-input'>
            Имя
          </label>
          <input
            className='profile-edit__input'
            id='name-input'
            type='text'
            name='name'
            required
            minLength='2'
            maxLength='30'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <span className='profile-edit__input-error' />
        <div className='profile-edit__input-wrapper'>
          <label className='profile-edit__label' htmlFor='email-input'>
            E-mail
          </label>
          <input
            className='profile-edit__input'
            id='email-input'
            type='email'
            name='email'
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <span className='profile-edit__input-error' />
        <button className='profile-edit__button' type='submit'>
          Редактировать
        </button>
      </form>
    </section>
  );
}

export default ProfileEditForm;
