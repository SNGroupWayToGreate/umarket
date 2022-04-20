import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.css'

export default function ProductsList({ title, children }) {



	return (
		<div className='products'>
			<div className="products__container container">
				<div className="products__title">
					{title}
				</div>
				<div className="products__body">
					<div className="products__items">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
