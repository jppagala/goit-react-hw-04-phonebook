import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchFilter.module.css';

class SearchFilter extends React.Component {
  static propTypes = {
    filter: PropTypes.string,
    changeFilter: PropTypes.func.isRequired,
  };

  handleChange = event => {
    this.props.changeFilter(event.target.value);
  };

  render() {
    const { filter } = this.props;
    return (
      <div>
        <p>Find contacts by name:</p>
        <input
          className={css.input}
          type="input"
          name="filter"
          value={filter}
          onChange={this.handleChange}
          placeholder="Input name to filter"
        />
      </div>
    );
  }
}

export default SearchFilter;
