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
				<li className=" d-flex mr-20 cu-p">
					<img className="mr-10" src="/img/Group.svg" alt="Logo" />
					<span className="">1205$</span>
				</li>
				<li>
					<img className="cu-p"  src="/img/Union.svg" alt="Logo" />
				</li>
			</ul>
		</header>
    )
}

export default Header;