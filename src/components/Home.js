import React from "react";

function Home(props){

    return (
        <div>
            <div className="add-to-cart">
                <img src="https://png.pngitem.com/pimgs/s/79-797280_cart-trolley-buy-add-plus-shopping-cart-with.png" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://auspost.com.au/shop/static/WFS/AusPost-Shop-Site/-/AusPost-Shop-auspost-B2CWebShop/en_AU/feat-cat/mobile-phones/always-on/category-tiles/MP_UnlockedPhones_3.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=> props.addToCartHandler({price: 1000, name: 'I-Phone 10'})}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
