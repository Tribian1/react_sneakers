import Card from '../components/Card'
import React from "react";
import axios from 'axios';
// import AppContext from '../context';


function Orders( ) {
    // const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://633eb8d383f50e9ba3b6ba98.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Is somethings gone wrong!');
            }
        })()
    });

    return (
    <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
            <h1>My Orders</h1>
        </div>
        <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                <Card 
                key={index}
                loading={isLoading}
                {...item} />
            ))}
        </div>
    </div>
    );
}

export default Orders;