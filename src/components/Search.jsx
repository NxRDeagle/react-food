import * as React from 'react';

const Search = ({ callBack = Function.prototype }) => {
  const [value, setValue] = React.useState('');

  const handleOnChange = (e) => setValue(e.target.value);

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    callBack(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search"
          onKeyDown={handleOnKeyDown}
          onChange={handleOnChange}
          value={value}
        />
        <button
          className="btn"
          onClick={handleSubmit}
          style={{ position: 'absolute', top: 0, right: 0 }}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
