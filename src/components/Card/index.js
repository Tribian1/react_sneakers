import styles from './Card.module.scss'

function Card(props) {

    return (
        <div className={styles.card}>
            <div className="favorite">	
                <img src="/img/hart white.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{props.price}$</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/Group 91.svg" alt="plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;