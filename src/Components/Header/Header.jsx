import NavButton from "../NavButton/NavButton"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import heart from '../../images/Shape.svg'
import cart from '../../images/default.svg'
import man from '../../images/Man.svg'
import chart from '../../images/chart.svg'
import logo from '../../images/logo.png'
import './Header.css'


export default function Header() {
	return (
		<header className='header'>
			<div className="header__container container">
				<div className="header__body">
					<div className="header__logo">
						<img src={logo} alt="" />
					</div>
					<div className="header__input input">
						<div className="input__search"></div>

						<input placeholder='Поиск по товарам' type='text' />
						<div className="input__picture"></div>
					</div>
					<ButtonGroup>
						<NavButton icon={heart} text='Избранное' count={10} />
						<NavButton icon={chart} text='Сравнение' count={4} />
						<NavButton icon={cart} text='Корзина' count={0} />
						<NavButton icon={man} text='Войти' count={8} />
					</ButtonGroup>
				</div>
			</div>
		</header>
	)
}
