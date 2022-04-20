import './App.css'
import Banner from './Components/Banner/Banner';
import CategoryCard from './Components/CategoryCard/CategoryCard';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard/ProductCard';
import ProductsList from './Components/ProductsList/ProductsList';
import TopBar from './Components/TopBar/TopBar';



const App = () => {
	return (
		<div className='wrapper'>
			<TopBar />
			<Header />
			<Navbar />
			<Banner />
			<ProductsList title='Популярные категории'>
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
			</ProductsList>
			<ProductsList title={'Хиты продаж'}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</ProductsList>
			<ProductsList title='Техника для дома'>
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
			</ProductsList>
			<ProductsList title={'Выбор покупателей'}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</ProductsList>
		</div>
	);
}

export default App;
