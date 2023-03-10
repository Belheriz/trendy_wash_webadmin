import React, { useState } from 'react';
import './SearchField.css';

function SearchField(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission
  };

  return (
    <div className="search-container">
      <div className="search-field">
        <div className="search-label">Banner List:</div>
        <form onSubmit={handleSubmit}>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
        <div className="button-container">
          <button className="add-button">+Add</button>
          <button className="export-button">Export CSV</button>
        </div>
      </div>
    </div>
  );
}

export default SearchField;
