import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { FaSistrix } from 'react-icons/fa';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const onChange = event => {
    setSearch(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    console.log(search);
  };
  return (
    <form onSubmit={onSubmit} className="input-group mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="검색어를 입력해주세요"
        value={search}
        onChange={onChange}
      />
      <button className="btn" type="submit">
        <FaSistrix size="20" />
      </button>
    </form>
  );
};
export default SearchInput;
