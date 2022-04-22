import './Footer.css'
import payme from '../../images/FooterIcons/Apps/payme.png'
import humo from '../../images/FooterIcons/Apps/humo.png'
import uzcard from '../../images/FooterIcons/Apps/uzcard.png'
import linkedin from '../../images/FooterIcons/socials/linkedin.png'
import instagram from '../../images/FooterIcons/socials/instagram.png'
import facebook from '../../images/FooterIcons/socials/facebook.png'
import twitter from '../../images/FooterIcons/socials/twitter.png'

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
						<div className="column__apps">
							<img src={payme} alt="" />
							<img src={humo} alt="" />
							<img src={uzcard} alt="" />
						</div>
					</div>
					<div className="footer__column column">
						<div className="column__label">Мы в социальных сетях</div>
						<div className="column__socials">
							<img src={linkedin} alt="" />
							<img src={instagram} alt="" />
							<img src={twitter} alt="" />
							<img src={facebook} alt="" />
						</div>
					</div>
					<div className="footer__column column">
						<div className="column__label">Единый кол центр</div>
						<div className="column__number">
							<a href="tel:+998071546060">+9980 71-54-60-60</a>
						</div>
					</div>
					<div className="footer__column column">
						<div className="column__label">Почта для пожеланий и предложений</div>
						<div className="column__email">
							<a href="msilto:info@udevsmarket.com">info@udevsmarket.com</a>
						</div>
					</div>
				</div>
				<div className="footer__footer">
					<span>UdevsMarket.uz</span>  Все права защищены
				</div>
			</div>
		</footer >
	)
}
