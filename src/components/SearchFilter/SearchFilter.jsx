import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchFilter.module.css';

const SearchFilter = ({ filter, changeFilter }) => {
  const handleChange = event => {
    changeFilter(event.target.value);
  };

  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        className={css.input}
        type="input"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Input name to filter"
      />
    </div>
  );
};

SearchFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

export default SearchFilter;
