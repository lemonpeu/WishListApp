import React from 'react';

//Styles
import './WishListForm.scss';

const WishListForm = ({ index, title, link, commentary }) => (
    <div className="wishlist-form" key={index}>
        <div className="info">
            <p className="link">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </p>
            <p className="commentary">{commentary}</p>
        </div>
    </div>
);

export default WishListForm;
