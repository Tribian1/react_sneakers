
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
	{
		title:'Nike Kyrie 7', 
		price: 113.1, 
		imgUrl: "/img/sneakers/image 2 .jpg"
	},
	{
		title:'Puma X Future Rider', 
		price: 199.9, 
		imgUrl: "/img/sneakers/image 3.jpg"
	},
	{
		title:'Nike Blazer Mid Sued', 
		price: 99.9,
		imgUrl: "/img/sneakers/image 4.jpg"
	},
	{
		title:'Nike Air Max 270', 
		price: 109.67, 
		imgUrl: "/img/sneakers/image 5.jpg"
	},
]
 
function App() {
  return (
	<div className="wrapper clear">
		<Drawer/>
		<Header/>
		<div className="content p-40">

			<div className="d-flex align-center justify-between mb-40">
				<h1 className="">All Sneakers</h1>
				<div className="search-block d-flex">
					<img src="/img/search.svg" alt="Search" />
					<input placeholder="Search..." />
				</div>
			</div>
			<div className="d-flex">
				{arr.map((obj) => (
					<Card 
					title={obj.title} 
					price={obj.price} 
					imageUrl = {obj.imgUrl} />
				))}
			</div>
	
		</div>
		
	</div>
	);
}

export default App;
