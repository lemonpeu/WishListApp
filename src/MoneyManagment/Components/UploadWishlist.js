import React from "react";
import "../Styles/UploadWishlist.scss";

const UploadWishlist = ({ title, date, text, onSubmit, value }) => (
  <div className="upload-wishlist">
    <form onSubmit={onSubmit}>
      {/* <div className="input-wrap">
        Title:{" "}
        <input
          type="text"
          name="commentary"
          onChange={title}
          autoComplete="off"
        ></input>
      </div>
      <div className="input-wrap">
        {" "}
        Date: <input type="date" name="commentary" onChange={date}></input>
      </div> */}
      <div className="input-wrap">
        Commentary:
        <input
          type="text"
          name="commentary"
          onChange={text}
          value={value}
        ></input>
      </div>
      <button className="btn-send"></button>
    </form>
  </div>
);

export default UploadWishlist;
