import React from 'react';
import ContentLoader from "react-content-loader";


import AppContext from '../../context'
import styles from './Card.module.scss'

function Card({ 
    id,
    onFavorite, 
    title, 
    imgUrl,
    price, 
    onPlus, 
    favorited = false, 
    loading = false
}) {
    const {isItemAdded} = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = {id, title, parentId: id, imgUrl, price};

    

    const onClickPlus = () => {
        onPlus(obj);
    }

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
       
    }
  

    return (
        <div className={styles.card}>
            {
                loading ?  
            <ContentLoader 
                speed={2}
                width={150}
                height={250}
                viewBox="0 0 150 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
               
              >
                <rect x="0" y="-1" rx="10" ry="10" width="150" height="90" /> 
                <rect x="0" y="100" rx="5" ry="5" width="150" height="15" /> 
                <rect x="0" y="126" rx="5" ry="5" width="100" height="15" /> 
                <rect x="0" y="168" rx="10" ry="10" width="80" height="24" /> 
                <rect x="116" y="162" rx="10" ry="10" width="32" height="32" />
            </ContentLoader> : 
              <>
                {onFavorite &&
                    <div className={styles.favorite} onClick={onClickFavorite}>	
                        <img src={isFavorite ? '/img/hart red.svg' : '/img/hart white.svg'} alt="unliked" />
                    </div>
                }
                <img width="100%" height={130} src={imgUrl} alt="sneakers" />
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Price:</span>
                        <b>{price}$</b>
                    </div>
                    {onPlus && <img 
                        className={styles.plus} 
                        onClick={onClickPlus} 
                        src={isItemAdded(id) ? "/img/plus grenn.svg" : "/img/plus.svg"} 
                        alt="plus" 
                    />}           
                </div>
              </>
            
            }
            
        </div>
    );
}

export default Card;