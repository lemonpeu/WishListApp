import React from "react";
import "../Styles/WishListForm.scss";

const WishListForm = ({ index, title, link, commentary }) => (
  <div className="wishlist-form" key={index}>
    <div className="info">
      <h1>{title}</h1>
      <p className="link">
        <a href={`"${link}"`}>{link}</a>
      </p>
      <p className="commentary">{commentary}</p>
    </div>
  </div>
);

export default WishListForm;
