import React from 'react'

 const Header = (props) => {
    const {countCartItems}=props;
  return (
    <div className=' row center block'>
        <div>

            <a href='#/'><h2>Simple Shopping Cart</h2></a>
        </div>
        <div>
            <a href='#/cart'>Cart </a> 
            {countCartItems?
       ( <button className='badge'>{countCartItems}</button> ):('')

        }  
            <a href='#/signin'>  Sign In</a>
        </div>
    </div>
  )
}
export default Header;
