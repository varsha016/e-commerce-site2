import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import getProductAction, { deleteSingleProductAction,  getSingleProductAction, updateProductAction } from '../redux/productAction';


function Details() {
     const {singleProducts, deleteProducts}=  useSelector(state=>state.allProduct)
   const dispatch =  useDispatch()
      const navigate= useNavigate()
   const [editData, setEditData] = useState()
    const {id} = useParams()


      useEffect(() => {
        dispatch(getSingleProductAction(id))
       
    }, [])


   
 


    
    
    
    
    
    return <>

 
   
     <div className="container">
        <div className="row">
    <div className="col-sm-6">
    <div className="container">
            <div className="row">
          { singleProducts.images && singleProducts.images .map((img,i)=><div className='col-sm-10 offset-1 ' key={img.id}>
           
            <img src={img} alt="img" className='img-fluid' />

         
           

          
          </div>)}
            <h4 className='text-secondary'>{singleProducts.title}</h4>
          </div>
          </div>
    </div>
            {singleProducts && <div className="col-sm-6">
            <div className="card mt-5 " >
        <div className="card-body">
          <p> Brand :- <strong className='fs-4'>{singleProducts.brand}</strong></p>
      
        
          <p><img src={singleProducts.thumbnail} alt="" height={150} width={150} /></p>
          <strong>{singleProducts.category}</strong>
          <p>{singleProducts.description}</p>

          <p>You have Discount :- <span className='fs-4'>{singleProducts.discountPercentage}</span>  <strong className='text-success fs-5'> % off</strong></p>
        
          <p>Price :- ₹{singleProducts.price}</p>
          <p>Staock :- {singleProducts.stock}</p>
          <p>Reting :-  <button className='rounded-pill bg-warning border'> <span className='fs-5 '>{singleProducts.rating}</span> <span className='text-success'><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i></span> </button></p>
          
        </div>
      <div className=" d-flex gap-2 m-4">
        <button type="button" data-bs-target="#exampleModal" data-bs-toggle="modal" 
        className="btn btn-outline-warning icon"  
        onClick={e=>setEditData(singleProducts)}><strong><i className="bi bi-pencil fs-1"></i></strong></button>

        <button type="button" className="btn btn-outline-danger btn-lh-lg" onClick={e=>{
          dispatch(deleteSingleProductAction(singleProducts.id))
          
alert("YOUR PRODUCT IS DELETED")
          }} ><i className="bi bi-archive fs-1"></i></button>
      </div>
      </div>
            </div>}
        </div>
     </div>

      {/* //////////modal//////////// */}
      {editData &&  <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-warning" id="exampleModalLabel">Edit Product</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <div className="container">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                      <div className="card">
                        <div className="card-header">Product</div>
                        <div className="card-body">

                          <div>
                            <label htmlFor="title" className="form-label">First title</label>
                            
                            <input type="" name="" id=""   onChange={e=>setEditData({...editData, thumbnail:e.target.value})}
                              value={editData.thumbnail} />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a file.</div>
                          </div>
                          <div>
                            <label htmlFor="title" className="form-label"> Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="title"
                              onChange={e=>setEditData({...editData, title:e.target.value})}
                              value={editData.title}
                              placeholder="Enter your title"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                          </div>
                          <div className="mt-2">
                            <label htmlFor="description" className="form-label">First Email</label>
                            <input
                              type="text"
                              className="form-control"
                              id="description"
                              onChange={e=>setEditData({...editData, description:e.target.value})}
                              value={editData.description}
                              placeholder="Enter Your Email"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                          </div>
                          <div className="mt-2">
                            <label htmlFor="price" className="form-label">price</label>
                            <input
                              type="text"
                              className="form-control"
                              id="price"
                              onChange={e=>setEditData({...editData, price:e.target.value})}
                              value={editData.price}
                              placeholder="Enter Your price"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a price.</div>
                          </div>
                          <div className="mt-2">
                            <label htmlFor="discountPercentage" className="form-label"
                              >discountPercentage</label>
                            <input
                              type="text"
                              className="form-control"
                              id="discountPercentage"
                              onChange={e=>setEditData({...editData, discountPercentage:e.target.value})}
                              value={editData.discountPercentage}
                              placeholder="discountPercentage"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                            discountPercentage
                            </div>
                          </div>
                          <div className="mt-2">
                            <label htmlFor="rating" className="form-label"
                              > Rating</label>
                            <input
                              type="text"
                              className="form-control"
                              id="rating"
                              onChange={e=>setEditData({...editData, rating:e.target.value})}
                              value={editData.rating}
                              placeholder="Reting"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Please Recheck Your Reting.
                            </div>
                          </div>
                          <div className="mt-2">
                            <label htmlFor="stock" className="form-label"
                              > stock</label>
                            <input
                              type="text"
                              className="form-control"
                              id="stock"
                              onChange={e=>setEditData({...editData, stock:e.target.value})}
                              value={editData.stock}
                              placeholder="stock"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Please Recheck Your stock.
                            </div>
                          </div>
                          <div className="mt-2">
                            <label htmlFor="brand" className="form-label"
                              > brand</label>
                            <input
                              type="text"
                              className="form-control"
                              id="brand"
                              onChange={e=>setEditData({...editData, brand:e.target.value})}
                              value={editData.brand}
                              placeholder="brand"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Please Recheck Your brand.
                            </div>
                          </div>
                          <div className="mt-2">
                            <label htmlFor="category" className="form-label"> category</label>
                            <input
                              type="text"
                              className="form-control"
                              id="category"
                              onChange={e=>setEditData({...editData, category:e.target.value})}
                              value={editData.category}
                              placeholder="category"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Please Recheck Your category.
                            </div>
                          </div>
                          <button type="button" data-bs-dismiss="modal" onClick={e=>{
                            dispatch(updateProductAction(editData))
                            alert("YOUR PRODUCT IS UPDATED")
                            }} 
                           
                            className="btn btn-primary w-100 mt-3">
                            Update
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
        </div>
      
      </div>
    </div>
  </div>}
   
 
  
  </>
}

export default Details