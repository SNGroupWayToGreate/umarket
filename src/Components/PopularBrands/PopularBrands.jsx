import './PopularBrands.css'
import nokia from '../../images/nokia.png'

export default function PopularBrands() {
	return (
		<div className='popular'>
			<div className="popular__container container">
				<div className="popular__title">
					Популярные бренды
				</div>
				<div className="popular__categories popular">
					<div className="popular__category">
						<div className="container__name">Телефоны</div>
					</div>
					<div className="popular__category">
						<div className="container__name">Аксессуары</div>
					</div>
					<div className="popular__category">
						<div className="container__name">Premium</div>
					</div>
					<div className="popular__category">
						<div className="container__name">Спорт</div>
					</div>
					<div className="popular__category">
						<div className="container__name">Игрушки</div>
					</div>
					<div className="popular__category">
						<div className="container__name">Красота</div>
					</div>
					<div className="popular__category">
						<div className="container__name">Красота</div>
					</div>
					<div className="popular__category">
						<div className="container__name">Обувь</div>
					</div>
				</div>
				<div className="popular__brands">
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
					<div className="popular__brand">
						<img src={nokia} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}
