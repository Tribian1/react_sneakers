// import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import AppContext from "../../context";
import React from "react";

function Header(props) {
	const {cartItems} = React.useContext(AppContext);
	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
	

    return (
        <header className="d-flex justify-between align-center p-40">
			<Link to="/" onClick={() => window.location.href="/"}>
				<div className="d-flex align-center">
					<img  src="img/image 4.svg" alt="Logo" />
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5">Best Sneakers Shop</p>
					</div>
				</div>
			</Link>
			<ul className="d-flex">
				<li onClick={props.onclickCart} className=" d-flex mr-20 cu-p">
					<img className="mr-10" src="img/Group.svg" alt="bucket" />
					<span>{totalPrice}$</span>
				</li>
				<li className="cu-p mr-20">
					<Link to="/favorites" onClick={() => window.location.href="/favorites"}>
						<img src="img/favorite.svg" alt="favorite" />
					</Link>
				</li>
				<li>
					<Link to="/orders" onClick={() => window.location.href="/orders"}>
						<img src="img/Union.svg" alt="user"  />
					</Link>
				</li>
			</ul>
		</header>
    )
}

export default Header;

