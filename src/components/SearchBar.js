import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {

  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    setTerm("")
  }

  return(
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Serach</label>
            <input value={term} type="text"
            onChange={onInputChange}/>
        </div>
      </form>
    </div>
  );
}


export default SearchBar;
