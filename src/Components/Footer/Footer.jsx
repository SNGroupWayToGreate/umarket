import './Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className="footer__container container">
				<div className="footer__items">
					<div className="footer__column column">
						<div className="column__label">Компания</div>
						<ul className="column__list">
							<li className="column__item">
								<a className="column__link">О компании</a>
							</li>
							<li className="column__item">
								<a className="column__link">Адреса магазинов</a>
							</li>
						</ul>
					</div>
					<div className="footer__column column">
						<div className="column__label">Информация</div>
						<ul className="column__list">
							<li className="column__item">
								<a className="column__link">Информация</a>
							</li>
							<li className="column__item">
								<a className="column__link">Доставка </a>
							</li>
							<li className="column__item">
								<a className="column__link">Бонусы </a>
							</li>
						</ul>
					</div>
					<div className="footer__column column">
						<div className="column__label">Помощь покупателю</div>
						<ul className="column__list">
							<li className="column__item">
								<a className="column__link">Вопросы и ответы</a>
							</li>
							<li className="column__item">
								<a className="column__link">Вопросы и ответы </a>
							</li>
							<li className="column__item">
								<a className="column__link">Обмен и возврат </a>
							</li>
						</ul>
					</div>
					<div className="footer__column column">
						<div className="column__label">Способ  оплаты</div>
					</div>
					<div className="footer__column column">
						<div className="column__label">Мы в социальных сетях</div>
					</div>
					<div className="footer__column column">
						<div className="column__label">Единый кол центр</div>
					</div>
					<div className="footer__column column">
						<div className="column__label">Почта для пожеланий и предложений</div>
					</div>
				</div>
				<div className="footer__footer">
					<span>UdevsMarket.uz</span>  Все права защищены
				</div>
			</div>
		</footer >
	)
}
