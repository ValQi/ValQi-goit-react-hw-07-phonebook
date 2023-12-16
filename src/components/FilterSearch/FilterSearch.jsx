import React from 'react';
import { InputField } from './FilterSearch.styled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/Slice/filterSlice.jsx';
import { selectStatusFilter } from 'components/Slice/selectorsApi.jsx';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <InputField type="text" name={filter} value={filter} onChange={onChange}/>
  );
};

export default Filter;