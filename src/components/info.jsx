import React from 'react';
import AppContext from '../context';
import styles from './Drawer/Drawer.module.scss'

const Info = ({ title, description, image }) => {
    const {setCartOpened} = React.useContext(AppContext);


  return (
    <div className={styles.cartEmpty}>
        <img className="mb-20" width="120px" src={image} alt="emptyBucket"/>
        <h2>{title}</h2>
        <p className="opacity-6">{description} </p>
        <button onClick={() => setCartOpened(false)} className={styles.greenButton}>
            <img src="/img/arrow.svg" alt="arrow" />
            Step Back
        </button>
    </div>
  )
}

export default Info;