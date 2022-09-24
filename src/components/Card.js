function Card() {
    return (
        <div className="card">
            <div className="favorite">	
                <img src="/img/hart white.svg" alt="unliked" />
            </div>
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
    );
}

export default Card;