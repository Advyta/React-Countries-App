import React from 'react';
import './Navbar.css';
import { toggleDarkmode } from '../features/contriesSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
    const dispatch = useDispatch();
    const changeTheme = () => {
        dispatch(toggleDarkmode());
    }
    const toggleTheme = useSelector(state => state.countries.darkmode);

  return (
    <header className='shadow p-3 mb-2 bg-body-tertiary rounded'>
      <div className="row align-items-center d-flex justify-content-around">
        <div className="col-5">
            <h2 className='title'>Where in the world?</h2>
        </div>
        <div className="col-5 text-end">
            <button className={` theme-changer`} onClick={() => changeTheme()} data-testid='themeToggler'><span className='mode-icon'><i className={toggleTheme ? 'fa-solid fa-moon' : 'fa-regular fa-moon'}></i></span>Dark mode</button>
        </div>
      </div>
    </header>
  )
}
