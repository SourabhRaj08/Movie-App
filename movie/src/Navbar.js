import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
export default function Navbar({onSearch}) {
  return (
    <div>
        <nav className='navbar'>
            <h1>MY TMBD</h1>
            <ul className='nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/tv">TV</Link>
                </li>
                <li>
                    <Link to="/favmov">Movie Library</Link>
                </li>
                <li>
                    <Link to="/favtv">TV Library</Link>
                </li> 
                <li>
                    <Link to="/Signin">SignIn</Link>
                </li>
                <li>
                    <Link to="/Signup">SignUp</Link>
                </li> 
            </ul>
            <SearchBar onSearch={onSearch}/>
        </nav>
    </div>
  )
}
