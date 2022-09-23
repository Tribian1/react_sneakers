function App() {
  return (
	<div className="wrapper clear">
		<header className="d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img  src="/img/image 4.svg" alt="Logo" />
				<div>
					<h3 className="text-uppercase">React Sneakers</h3>
					<p className="opacity-5">Best Sneakers Shop</p>
				</div>
			</div>
			<ul className="d-flex">
				<li className="mr-30">
					<img  src="/img/Group.svg" alt="Logo" />
					<span>1205$</span>
				</li>
				<li>
					<img  src="/img/Union.svg" alt="Logo" />
				</li>
			</ul>
		</header>
		<div className="content p-40">
			<h1 className="mb-40">All Sneakers</h1>
			<div className="d-flex">
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
