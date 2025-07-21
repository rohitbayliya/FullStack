import React from 'react'
import { Link, NavLink } from 'react-router'

function NavBar() {
  return (
    <div> <ul> 
        <li>
            <NavLink to={''}>HomePage</NavLink>
        </li>
        <li>
            <NavLink to={'/products'}>Products Page</NavLink>
        </li>
        <li>
            <NavLink to={'/search'}> Search</NavLink>
        </li>
        <li>
             <NavLink to={'category'}> Category</NavLink>
        </li>
        </ul>
       
    </div>
  )
}

export default NavBar