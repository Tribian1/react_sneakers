function Header() {
    return (
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
    )
}

export default Header;