function Drawer() {
    return (
        <div style={{display: 'none'}}className="overlay">
            <div className="drawerBlock">
                <h2 className="d-flex justify-between mb-30">Bucket<img className="cu-p" src="/img/decline.svg" alt="btn" /></h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" 
                                        width={100} 
                                        height={100} 
                                        src="/img/sneakers/image 2 .jpg" alt="sneakers"
                                        />
                        <div className="mr-20">
                            <p className="mb-5">Nike Blazer Mid Suede</p>
                            <b>130$</b>
                        </div>
                        <img className="removeBtn" src="/img/decline.svg" alt="btn" />
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" 
                                        width={100} 
                                        height={100} 
                                        src="/img/sneakers/image 2 .jpg" alt="sneakers"
                                        />
                        <div className="mr-20">
                            <p className="mb-5">Nike Blazer Mid Suede</p>
                            <b>130$</b>
                        </div>
                        <img className="removeBtn" src="/img/decline.svg" alt="btn" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Total: </span>
                            <div></div>
                            <b>...$</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>...$</b>
                        </li>
                    </ul>
                    <button className="greenButton">Make your order <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
		</div> 
        
    )
}

export default Drawer;