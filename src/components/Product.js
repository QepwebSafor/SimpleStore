import React from 'react';

 const Product = (props) => {
    const {product, onAdd, onRemove, item } = props;
  return (
    <div className='card'>
   
        <img className='small' src={product.image} alt={product.name}/>
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        {item ? (<div>

<button onClick={()=>onRemove(item)} className="remove">-</button>
<span className='p-1'>{item.qty}</span>
<button onClick={()=>onAdd(item)} className="add">+</button>
</div>): ( <button  onClick={()=> onAdd(product)}>Add To Cart</button>
)}
    </div>
  )
}
export default Product;