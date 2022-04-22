import React from 'react'
import './TopBar.css'
import locationOn from '../../images/topBarIcons/location_on.svg'
import phone from '../../images/topBarIcons/tel.svg'

export default function TopBar() {
	return (
		<div className='topBar'>
			<div className="topBar__container container">
				<nav className="topBar__menu">
					<ul className="topBar__list">
						<li className="topBar__item">
							<a className="topBar__link">Магазины</a>
						</li>
						<li className="topBar__item">
							<a className="topBar__link">Оставить отзыв </a>
						</li>
						<li className="topBar__item">
							<a className="topBar__link">Доставка</a>
						</li>
					</ul>
				</nav>
				<div className="topBar__column">
					<div className="topBar__phone phone">
						<div className="phone__icon">
							<img src={phone} alt="" />
						</div>
						<div className="phone__number">
							+998 97 778-17-08
						</div>
					</div>
					<div className="topBar__location location">
						<div className="location__icon">
							<img src={locationOn} alt="" />
						</div>
						<div className="location__city">
							Ташкент
						</div>
					</div>
					<div className="topBar__language language">
						<div className="language__flag">
							<img src="" alt="" />
						</div>
						<div className="language__language">
							Рус
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
