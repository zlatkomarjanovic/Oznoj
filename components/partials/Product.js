import React from 'react';
import Link from 'next/link';

const Product = (props) => {
	return (
		<div className='product'>
			<div className='product-card'>
				{/*eslint-disable-next-line*/}
				<img alt='sups' src={props.img} width='192px' height='171px' />
				<div className="supplement-product-info">
					<h5 className='product-card-heading'>{props.name}</h5>
					<p className='product-card-text'>{props.foodSources}</p>
				</div>
				<Link href={`/supplements/${props.id}`}>
					<a className='supplement-link'>Read More</a>
				</Link>
			</div>
		</div>
	);
};

export default Product;
