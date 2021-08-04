import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useFormWithValidationHook';

function ProfileEditForm({ onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation({ name: currentUser.name });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setIsSuccess(false);
    const newName = values.name;
    Promise.resolve(
      onUpdateUser({
        name: newName,
      })
    )
      .then(() => {
        resetForm({ name: newName });
        setIsSuccess(true);
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  }
  return (
    <section className='profile-edit'>
      <h2 className='profile-edit__heading'>{`Привет, ${currentUser.name}!`}</h2>
      <form
        className='profile-edit__form'
        id='profile-edit-form'
        name='profile-edit'
        onSubmit={handleSubmit}
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
            pattern='[a-zA-Zа-яА-ЯёЁ\s\-]+$'
            value={values.name ?? ''}
            onChange={handleChange}
          />
        </div>
        <span className='profile-edit__error'>{errors.name}</span>
        <div className='profile-edit__input-wrapper'>
          <label
            className='profile-edit__label profile-edit__label_disabled'
            htmlFor='email-input'
          >
            E-mail
          </label>
          <input
            className='profile-edit__input'
            id='email-input'
            type='email'
            name='email'
            required
            value={currentUser.email}
            onChange={handleChange}
            disabled
          />
        </div>
        <span className='profile-edit__error' />
        <div className='profile-edit__button-wrapper'>
          {isSuccess ? (
            <span className='profile-edit__server-message profile-edit__server-message_success'>
              Данные успешно обновлены!
            </span>
          ) : (
            <span className='profile-edit__server-message profile-edit__server-message__error'>
              {errorMessage}
            </span>
          )}
          <button
            disabled={!isValid}
            className='profile-edit__button hover'
            type='submit'
          >
            Редактировать
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProfileEditForm;
