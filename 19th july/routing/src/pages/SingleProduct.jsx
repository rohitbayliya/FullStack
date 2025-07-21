import React from 'react'
import { useParams } from 'react-router'

function SingleProduct() {
    let params = useParams()
  return (
    <div>SingleProduct : product with id = {params.id}</div>
    
  )
}

export default SingleProduct