import React from 'react'
import { Link,  } from 'react-router-dom'

function ProductCart({product}) {
  
  return <>
           
  <div className="card mt-5 " >
        <div className="card-body">
          <div className="card-header">
            <h4 className='text-secondary'>{product.title}</h4>

          </div>
          <h2>{product.brand}</h2>
          <h6 className='fs-4'>{product.category}</h6>

          <p>You have Discount :- <span className='fs-4'>{product.discountPercentage}</span>  <strong className='text-success fs-5'> % off</strong></p>
          <div className="container">
            <div className="row">
          {product.images.map((img,i)=><div className='col-sm-10 offset-1 '>
         
           

            <img src={img} alt="" className='img-fluid' />
          
          </div>)}
          </div>
          </div>
          <p className='fs-4'>Price :- ₹ <span>{product.price}</span></p>
        
        
          <h5>

      <Link className='text-success nav-link' to={`/details/${product.id}`}>Product-Details </Link>
          </h5>
        </div>
     
      </div>
     
  
  </>
}

export default ProductCart