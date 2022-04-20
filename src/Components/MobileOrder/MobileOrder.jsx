import logo from '../../images/smallLogo.png'
import mobile from '../../images/mobile.png'
import appStore from '../../images/appStore.png'
import googlePlay from '../../images/googlePlay.png'
import './MobileOrder.css'


export default function MobileOrder() {
	return (
		<div className="mobile">
			<div className="mobile__container container">
				<div className="mobile__content">
					<div className="mobile__undertitle">
						<div className="mobile__logo">
							<img src={logo} alt="" />
						</div>
						<div className="mobile__txt">
							mobile application
						</div>
					</div>
					<div className="mobile__title">
						Заказывайте через
						мобильное приложение
					</div>
					<div className="mobile__apps">
						<a className="mobile__appStore">
							<img src={appStore} alt="" />
						</a>
						<a className="mobile__googlePlay">
							<img src={googlePlay} alt="" />
						</a>
					</div>
				</div>
				<div className="mobile__block block">
					<div className="block__image">
						<img src={mobile} alt="" />
					</div>
					<div className="block__text">
						Отсканируйте QR-код
						и установите приложение
					</div>
				</div>
			</div>
		</div>
	)
}
