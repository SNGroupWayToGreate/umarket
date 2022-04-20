import './Banner.css'
import banner from '../../images/banner.jpg'

export default function Banner() {
	return (
		<div className='banner'>
			<div className="banner__container container">
				<img src={banner} alt="" />
			</div>
		</div>
	)
}
