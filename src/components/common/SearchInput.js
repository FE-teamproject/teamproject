import React, { useState, useEffect, useCallback } from 'react';
import { Input, Form } from 'antd';
import 'antd/dist/antd.css';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const onChange = event => {
    setSearch(event.target.value);
  };
  const onSubmit = event => {
    console.log(search);
  };
  return (
    <Form onFinish={onSubmit}>
      <Input.Search
        type="text"
        value={search}
        placeholder="검색어를 입력해주세요"
        allowClear
        onChange={onChange}
        onSearch={onSubmit}
      />
      {/* <button type="submit">
        <FaSistrix size="20" />
      </button> */}
    </Form>
  );
};
export default SearchInput;
