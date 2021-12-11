import React from 'react';
import Product from '../partials/Product';
import { supplementData } from '../../api/supplements';

const Products = () => {
	return (
		<div className='products'>
			{supplementData.map((supplement) => (
				<Product key={supplement.id} {...supplement} />
			))}
		</div>
	);
};

export default Products;
