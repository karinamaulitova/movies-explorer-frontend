import React from 'react';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__inner-container'>
        <h3 className='techs__heading'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className='techs__tabs-list'>
          <li className='techs__tabs-item'>
              <p className='techs__tabs-text'>HTML</p>
          </li>
          <li className='techs__tabs-item'>
              <p className='techs__tabs-text'>CSS</p>
          </li>
          <li className='techs__tabs-item'>
              <p className='techs__tabs-text'>JS</p>
          </li>
          <li className='techs__tabs-item'>
              <p className='techs__tabs-text'>React</p>
          </li>
          <li className='techs__tabs-item'>
              <p className='techs__tabs-text'>Git</p>
          </li>
          <li className='techs__tabs-item'>
              <p className='techs__tabs-text'>Express.js</p>
          </li>
          <li className='techs__tabs-item'>
              <p className='techs__tabs-text'>mongoDB</p>
          </li>
      </ul>
    </section>
  );
}

export default Techs;
