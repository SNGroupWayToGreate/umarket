import './App.css'
import Banner from './Components/Banner/Banner';
import CategoryCard from './Components/CategoryCard/CategoryCard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MobileOrder from './Components/MobileOrder/MobileOrder';
import Navbar from './Components/Navbar/Navbar';
import PopularBrands from './Components/PopularBrands/PopularBrands';
import ProductCard from './Components/ProductCard/ProductCard';
import ProductsList from './Components/ProductsList/ProductsList';
import TopBar from './Components/TopBar/TopBar';
//====================================================================================
import smartphone from './images/category/smartphone.png'
import monitor from './images/category/monitor.png'
import watch from './images/category/watch.png'
import computer from './images/category/computer.png'
import category1 from './images/category/category1.png'
import category2 from './images/category/category2.png'
import category3 from './images/category/category3.png'
import category4 from './images/category/category4.png'
import product from './images/product/product.png'


const App = () => {
	return (
		<div className='wrapper'>
			<TopBar />
			<Header />
			<Navbar />
			<Banner />
			<ProductsList title='Популярные категории'>
				<CategoryCard image={smartphone} title={'Смартфоны'} />
				<CategoryCard image={monitor} title={'Мониторы'} />
				<CategoryCard image={computer} title={'Компьютеры'} />
				<CategoryCard image={watch} title={'Аксессуары'} />
			</ProductsList>
			<ProductsList title={'Хиты продаж'}>
				<ProductCard image={product} />
				<ProductCard image={product} />
				<ProductCard image={product} />
				<ProductCard image={product} />
			</ProductsList>
			<ProductsList title='Техника для дома'>
				<CategoryCard image={category2} title={'Встраиваемая техника'} />
				<CategoryCard image={category1} title={'Пылесосы'} />
				<CategoryCard image={category4} title={'Стиральные машины'} />
				<CategoryCard image={category3} title={'Холодильники'} />
			</ProductsList>
			<ProductsList title={'Выбор покупателей'}>
				<ProductCard image={product} />
				<ProductCard image={product} />
				<ProductCard image={product} />
				<ProductCard image={product} />
			</ProductsList>
			<PopularBrands />
			<MobileOrder />
			<Footer />
		</div>
	);
}

export default App;
