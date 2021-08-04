import React  from 'react';

function FilterCheckbox({checked, onChange}) {

  return (
    <label className='filter-checkbox'>
      <input
        className='filter-checkbox__checkbox'
        type='checkbox'
        name='short-film'
        value={checked}
        onChange={onChange}
      />
      <div className='filter-checkbox__switch' />
      <span className='filter-checkbox__label'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
