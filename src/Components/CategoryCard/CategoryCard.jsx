import './CategoryCard.css'

export default function CategoryCard({ title, image }) {
	return (
		<div className="category">
			<div className="category__image">
				<img src={image} alt="categoryImage" />
			</div>
			<div className="category__title">
				<a href='#'>
					{title}
				</a>
			</div>
		</div>
	)
}
