import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { addItem } from './reducers/ProductsSlice';
import { products } from './reducers/Products';

const ProductList = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.product.totalAmount);
 
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>            {product.name} - ${product.price}
            <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${totalAmount}</h3>

    </div>
  );
};

export default ProductList;
