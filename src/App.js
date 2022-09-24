
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
				<Card />
				<div className="card">
					<img width={133} height={112} src="/img/sneakers/image 3.jpg" alt="sneakers" />
					<h5>Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Price:</span>
							<b>113$</b>
						</div>
						<button className="button">
							<img width={11} height={11} src="/img/Group 91.svg" alt="plus" />
						</button>
					</div>
				</div>
				<div className="card">
					<img width={133} height={112} src="/img/sneakers/image 4.jpg" alt="sneakers" />
					<h5>Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Price:</span>
							<b>113$</b>
						</div>
						<button className="button">
							<img width={11} height={11} src="/img/Group 91.svg" alt="plus" />
						</button>
					</div>
				</div>
				<div className="card">
					<img width={133} height={112} src="/img/sneakers/image 5.jpg" alt="sneakers" />
					<h5>Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Price:</span>
							<b>113$</b>
						</div>
						<button className="button">
							<img width={11} height={11} src="/img/Group 91.svg" alt="plus" />
						</button>
					</div>
				</div>
				<div className="card">
					<img width={133} height={112} src="/img/sneakers/image 2 .jpg" alt="sneakers" />
					<h5>Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Price:</span>
							<b>113$</b>
						</div>
						<button className="button">
							<img width={11} height={11} src="/img/Group 91.svg" alt="plus" />
						</button>
					</div>
				</div>

			</div>
	
		</div>
		
	</div>
	);
}

export default App;
