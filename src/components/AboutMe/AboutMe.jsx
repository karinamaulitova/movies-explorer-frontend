import React from 'react';
import photo from '../../images/my-photo.jpeg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className='about-me' id='student'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__wrapper'>
      <div className='about-me__text-container'>
        <p className='about-me__name'>Карина</p>
        <p className='about-me__info'>Фронтенд-разработчик, 25 лет</p>
        <p className='about-me__text'>Я родилась и живу в Санкт-Петербурге, закончила магистратуру по переговорам в СПбГУ. Люблю слушать музыку и играть в "Что? Где? Когда?". Пару лет назад начала писать код и поняла, что мне это очень нравится. Во время обучения в Яндекс.Прктикуме участвовала в разработке благотворительного сайта в команде с другими студентами.</p>
        <div className='about-me__links-container'>
            <a className='about-me__link hover' href='https://www.facebook.com/karina.maulitova' target='_blank' rel="noreferrer">Facebook</a>
            <a className='about-me__link hover' href='https://github.com/karinamaulitova' target='_blank' rel="noreferrer">Github</a>
        </div>
      </div>
      <img className='about-me__photo' src={photo} alt='Фото Карины'/>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;