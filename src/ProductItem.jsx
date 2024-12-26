import React from "react";

import './ProductItem.css'



const ProductItem = ({category, itemArray,addToCart,alreadyInCart}) => {
    return(
        <div key={category}>
            <div className="product-category">
                <hr/>
                <h3>{category}</h3>
                <hr/>
            </div>
            <div className="product-list">
            
            
                {itemArray.map((item) => (
                    <div className="product-card" key={item.name}>
                        <h4 className="product-title">{item.name}</h4>
                        <img
                            className="product-image"
                            src={item.image}                            
                        />
                        <h3 className="product-price">{item.cost}</h3>
                        <p className="product-description">{item.description}</p>
                        <button className="product-button"
                            style={{backgroundColor:alreadyInCart(item.name) ? 'gray':'#4CAF50'}}
                            disabled={alreadyInCart(item.name) ? true:false}
                            onClick={() => addToCart({name:item.name, cost:item.cost, image:item.image})}
                        >
                            {alreadyInCart(item.name) ? 'Added to Cart':'Add to Cart'}

                        </button>
                    </div>
                ))}
            
            </div>
        </div>
    )
}

export default ProductItem
