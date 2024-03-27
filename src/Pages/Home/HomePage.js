import React from 'react'
import SearchBar from '../../Components/SearchBar'
import Filter from '../../Components/Filter'
import Home from './Home'

export default function HomePage() {
  return (
    <div>
      <div className="row d-flex justify-content-around mx-3 my-4">
          <div className="col-5">
            <SearchBar />
          </div>
          <div className="col-5 filter-component">
            <Filter />
          </div>
      </div>
        <Home />
    </div>
  )
}
