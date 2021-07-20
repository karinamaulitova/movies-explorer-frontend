import React from 'react';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>
        О проекте
      </h2>
        <div className='about-project__description'>
          <h3 className='about-project__description-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__description'>
          <h3 className='about-project__description-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__description-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      <div className='about-project__duration-container'>
          <p className='about-project__duration-bar about-project__duration-bar_type_blue'>1 неделя</p>
          <p className='about-project__duration-bar'>4 недели</p>
          <p className='about-project__duration-text'>Back-end</p>
          <p className='about-project__duration-text'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
