import React, { useState } from 'react';

function FilterCheckbox() {
  const [value, setValue] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <label className='filter-checkbox'>
      <input
        className='filter-checkbox__checkbox'
        type='checkbox'
        name='short-film'
        value={value}
        onChange={handleChange}
      />
      <div className='filter-checkbox__switch' />
      <span className='filter-checkbox__label'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
