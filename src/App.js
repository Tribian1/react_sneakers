import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import AppContext from "./context";
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";




 
function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favorites, setFavorites] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);
	
		// Запрос з допомогою fetch()

		// fetch('https://633eb8d383f50e9ba3b6ba98.mockapi.io/items')
		// .then(res => {
		// 	return res.json();
		// })
		// .then(json => {
		// 	setItems(json);
		// });
		



	React.useEffect(() => {
		async function fetchData () {
			try {
				const [cartResponse, favoriteResponse, itemResponse] = await Promise.all([
					axios.get('https://633eb8d383f50e9ba3b6ba98.mockapi.io/cart'),
					axios.get('https://633eb8d383f50e9ba3b6ba98.mockapi.io/favorite'),axios.get('https://633eb8d383f50e9ba3b6ba98.mockapi.io/items')
				]);
						
				setIsLoading(false);
				setCartItems(cartResponse.data);
				setFavorites(favoriteResponse.data);
				setItems(itemResponse.data);
			} catch (error)	{
				alert('Error fetching cart data');
				console.error(error);
			}	
		}
		fetchData();
	}, []);
	
	const onAddToCart = async (obj) => {
		const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id));
		try {
			if (findItem) {
				setCartItems(prev => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
				await axios.delete(`https://633eb8d383f50e9ba3b6ba98.mockapi.io/cart/${findItem.id}`);
			} else {		
				const {data} = await axios.post('https://633eb8d383f50e9ba3b6ba98.mockapi.io/cart', obj);
				setCartItems((prev) => [...prev, data ]);
				setCartItems((prev) => 
				prev.map(item => {
					if(item.parentId === data.parentId ) {
						return {
							...item,
							id:data.id
						}
					}
					return item;
				}));
			}
		} catch (error) { 
			alert('Error adding to cart item');
			console.error(error);
		}
	}

	const onRemoveItem = (id) => {
		try {
			axios.delete(`https://633eb8d383f50e9ba3b6ba98.mockapi.io/cart/${id}`);
			setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
		} catch (error) {
			alert('Error removing cart item');
			console.error(error);
		}
	}

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://633eb8d383f50e9ba3b6ba98.mockapi.io/favorite/${obj.id}`);
				setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));	
			} else {
				const { data } = await axios.post('https://633eb8d383f50e9ba3b6ba98.mockapi.io/favorite', obj);
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert('Error adding cart item toFavorite');
			console.error(error);
		}
	}

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
	}


	const isItemAdded  = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id))
	}

  return (
	<AppContext.Provider 
		value={{ 
		items, 
		cartItems,
		favorites, 
		isItemAdded, 
		onAddToFavorite,
		onAddToCart,
		setCartOpened, 
		setCartItems }}>

		<div className="wrapper clear">
			<Drawer 
				items={cartItems} 
				onClose={() => setCartOpened(false)} 
				onRemove={onRemoveItem} 
				opened={cartOpened}
				/>

			
			<Header onclickCart={() => setCartOpened(true)}/>

			<Switch>
				<Route path="/" exact>
					<Home 
						items={items}	
						cartItems={cartItems}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						onChangeSearchInput={onChangeSearchInput}
						onAddToFavorite={onAddToFavorite}
						onAddToCart={onAddToCart}
						isLoading={isLoading}
						
					/>
				</Route>

				<Route path="/favorites" exact>
					<Favorites  />
				</Route>

				<Route path="/orders" exact>
					<Orders  />
				</Route>
			</Switch>
			
			
		
		</div>
	</AppContext.Provider>
	);
}

export default App;
