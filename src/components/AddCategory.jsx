import { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    // console.log('prueba submit para jest');
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form
      onSubmit={onSubmit}
      aria-label='form'
    >
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        // onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
