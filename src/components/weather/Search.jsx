import React, { useState } from 'react';

const Search = ({ searchWeather }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert('Please enter your location');
    } else {
      searchWeather(text);
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ margin: '15px auto', width: 290 }}>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
        style={{ width: '100%' }}
        type="text"
        placeholder="city"
      />
    </form>
  );
};

export default Search;
