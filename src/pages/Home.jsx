import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getProductAction from '../redux/productAction'
import ProductCart from './ProductCart'

function Home() {
  const {products,deleteProducts}= useSelector(state=>state.allProduct)
    const dispatch=  useDispatch()
  const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    
    
    
    
    useEffect(() => {
      setLoading(true)
      
      dispatch(getProductAction({limit,page}))
      

      setLoading(false)
    }, [deleteProducts,limit,page])
    return (<>

   <div className="container">
    <div className="row">
    
      {
        products.map((item,i)=><div className='col-4' key={item.id}>
        
   {loading 
   ? <div className="spinner-border"></div>
   : <ProductCart product={item}/>
   }    
    
  </div>
      
      )
    }


      <div className='d-flex justify-content-center gap-2 '>

    
     {page >= 10 &&  <button type="button" class="btn btn-primary" onClick={e => setPage(page - 10)}>pre</button>}
    <button type="button" onClick={e=>setPage(0)} class="btn btn-primary">page1</button>
    <button type="button" onClick={e=>setPage(10)} class="btn btn-primary">page2</button>
    <button type="button" onClick={e=>setPage(20)} class="btn btn-primary">page3</button>
     {page !== 30 &&  <button type="button" class="btn btn-primary" onClick={e => setPage(page + 10)}>Next</button>}
      </div>
       
        

        
    
    </div>
  </div>
 
  
  
  </>
  
  )
}

export default Home