import React, { useState } from 'react';
import Form from '../../Sections/Form/Form';
import WishListItems from '../../Sections/WishListItems/WishListItems';

//Styles
import './PrincipalContainer.scss';

const PrincipalContainer = () => {
    const [items, setItems] = useState([]);
    return (
        <section id="container-section">
            <div className="header-container">
                <h1>
                    <span role="img" aria-label="stars">
                        ✨
                    </span>
                    WishList
                    <span role="img" aria-label="stars">
                        ✨
                    </span>
                </h1>
                <Form items={items} setItems={setItems} />
            </div>
            <div className="wishlist-wrap">
                <WishListItems items={items} />
            </div>
        </section>
    );
};

export default PrincipalContainer;
