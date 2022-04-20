import React from 'react'
import './ProductCard.css'

export default function ProductCard() {
	return (
		<div className="product">
			<div className="product__image">
				<img src='' alt="productImage" />
			</div>
			<div className="product__name">
				<a href='#'>
					Samsung Galaxy A41 Red
					64 GB
				</a>
			</div>
			<div className="product__price">
				3 144 000 сум
			</div>
			<div className="product__monthly">
				От 385 000 сум/12 мес
			</div>
			<div className="product__rating">
				stars
			</div>
			<div className="product__buttons">
				<button className='product__add add' type='button'>
					<div className="add__text">В корзину</div>
				</button>
			</div>
		</div>
	)
}
