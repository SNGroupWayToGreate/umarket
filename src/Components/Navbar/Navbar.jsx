import './Navbar.css'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div className="navbar__container container">
				<div className="navbar__menu">
					<ul className="navbar__list">
						<li className="navbar__item">
							<a className="navbar__link">Акции и скидки</a>
						</li>
						<li className="navbar__item">
							<a className="navbar__link">Смартфоны и гаджеты</a>
						</li>
						<li className="navbar__item">
							<a className="navbar__link">Телевизоры и аудио</a>
						</li>
						<li className="navbar__item">
							<a className="navbar__link">Техника для кухни</a>
						</li>
						<li className="navbar__item">
							<a className="navbar__link">Красота и здоровье</a>
						</li>
						<li className="navbar__item">
							<a className="navbar__link">Ноутбуки и компьютеры</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}




