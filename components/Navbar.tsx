import React from 'react'
import { ImBooks } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='navbar bg-base-100 justify-between px-5'>
      <div>
        <ImBooks className='btn btn-ghost' size={60} />
        <a className='btn btn-ghost normal-case text-xl'>Simple Books Management System</a>
      </div>
      <div>
        {/* MERON TONG SEARCH FUNCTIONALITIES PARA MA FILTER MGA BOOKS */}
        <FaSearch className='btn btn-ghost' size={55} />
      </div>
    </nav>
  )
}

export default Navbar