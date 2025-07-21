import React from 'react'
import { Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>You are at Products Page
        <Outlet/>
    </div>
  )
}

export default Products