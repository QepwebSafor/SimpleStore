import React from 'react'
import Product from './Product';
 const Main = (props) => {
    const {products, onAdd, onRemove, cartItems} =props;
  return (
    <div className='block col-2'>
        <h3>Drawings</h3>
        <div className='row'>
           { products.map((product)=>(
            <Product  key={product.id}
            item={cartItems.find((x)=> x.id === product.id)}
            product={product} onAdd={onAdd} onRemove={onRemove}/>
           ))}
        </div>
    </div>
  )
}
export default Main;