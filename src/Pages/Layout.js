import React from 'react'
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

export default function Layout() {
  const darkmode = useSelector((state) => state.countries.darkmode)
  return (
    <div className={darkmode ? 'dark-mode' : 'light-mode'}>
      <Navbar />
      <main>
        <Outlet/>
      </main>
    </div>
  )
}