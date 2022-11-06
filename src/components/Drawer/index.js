import React from 'react';
import AppContext from '../../context';
import axios from 'axios';

import styles from './Drawer.module.scss'
import Info from '../info';

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Drawer({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await  axios.post('https://633eb8d383f50e9ba3b6ba98.mockapi.io/orders', {
                items: cartItems
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);


            for (let i = 0 ;i < cartItems.length; i++) {
                const items = cartItems[i];
                await  axios.delete('https://633eb8d383f50e9ba3b6ba98.mockapi.io/cart', + items.id);
                await delay();
            }
        } catch (error) {
            alert('Is somethings gone wrong')
        }
        setIsLoading(false);
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawerBlock}>
                <h2 className="d-flex justify-between mb-30">Bucket
                    <img onClick={onClose} className="cu-p" src="/img/decline.svg" alt="btn-close" />
                </h2>

                {items.length > 0 ? (
                <div className="flex d-flex flex-column">
                    <div className={styles.items}>
                            {items.map((obj) => (   
                        <div key={obj.id} className={styles.cartItem}>
                            <img className="mr-20"  width={100} height={100} 
                            src={obj.imgUrl} alt="sneakers"
                                            />
                            <div className="mr-20">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}$</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} id='remove' className={styles.removeBtn} src="/img/decline.svg" alt="btn" />
                        </div>)
                )}
                    </div>
                        <div className={styles.cartTotalBlock}>
                            <ul>
                                <li>
                                    <span>Total: </span>
                                    <div></div>
                                    <b>{totalPrice}$</b>
                                </li>
                                <li>
                                    <span>Tax 5%:</span>
                                    <div></div>
                                    <b>{Math.round((totalPrice / 100) * 5)}$</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className={styles.greenButton}>Make your order <img src="/img/arrow.svg" alt="arrow" /></button>
                        </div>
                </div>
                ) : (
                    <Info  
                    title={isOrderComplete ? "The order is done!" : "Empty Bucket "} 
                    description={isOrderComplete ? `You order # ${orderId} will be shipped soon!` : 'Add at list one pair of snikears'}
                    image={isOrderComplete ? "/img/done to add.jpg" : "/img/bucket.png"} 
                    /> 
                    )
                }
            </div>
		</div> 
    )
}

export default Drawer;

