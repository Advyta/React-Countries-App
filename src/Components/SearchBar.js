import React from 'react';
import { setSearch } from '../features/contriesSlice';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
    const dispatch = useDispatch();
    const handleSearch = (event) => {
        dispatch(setSearch(event.target.value));
    }

  return (
    <div>
      <input type="text" placeholder="Search for a country..." onChange={handleSearch} className='p-2 border border-0 shadow bg-body-tertiary rounded placeholder w-75 cursor'/>
    </div>
  )
}