import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { searchWeather } from '../../redux/actions/weatherActions';

const Search = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert('Please enter your location');
    } else {
      dispatch(searchWeather(text));
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
