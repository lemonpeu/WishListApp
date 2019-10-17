import React, { Component } from "react";
import "./Styles/PrincipalPage.scss";
import WishListForm from "./Components/WishListForm";
import "./Styles/UploadWishlist.scss";

class PrincipalPage extends React.Component {
  state = {
    wishlistArr: [],
    text: "",
    commentary: "",
    link: ""
  };

  onChangeTitle = e => {
    this.setState({ text: e.target.value });
  };

  onChangeCommentary = e => {
    this.setState({ commentary: e.target.value });
  };

  onChangeLink = e => {
    this.setState({ link: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newWish = {
      title: this.state.text,
      commentary: this.state.commentary,
      link: this.state.link
    };
    const newwishList = [...this.state.wishlistArr, newWish];
    // qué pasa si es un array de objetos?
    this.setState({
      text: "",
      commentary: "",
      link: "",
      wishlistArr: newwishList
    });
    // localStorage.setItem("items", JSON.stringify(this.state.wishlistArr));
    // const data = JSON.parse(localStorage.getItem("items"));
    // console.log(this.state.text);
  };

  render() {
    return (
      <div id="principal-page">
        <header>
          <div className="upload-wishlist">
            <form onSubmit={this.onSubmit} autoComplete="off">
              <div className="input-wrap">
                Title:
                <input
                  type="text"
                  name="title"
                  onChange={this.onChangeTitle}
                  value={this.state.text}
                ></input>
              </div>
              <div className="input-wrap">
                Link:
                <input
                  type="text"
                  name="commentary"
                  onChange={this.onChangeLink}
                  value={this.state.link}
                ></input>
              </div>
              <div className="input-wrap">
                Commentary:
                <input
                  type="text"
                  name="commentary"
                  onChange={this.onChangeCommentary}
                  value={this.state.commentary}
                ></input>
              </div>
              <button className="btn-send">Enviar</button>
            </form>
          </div>
        </header>
        <div className="wishlist-wrap">
          {this.state.wishlistArr.map((wishListElement, index) => {
            return (
              <WishListForm
                title={wishListElement.title}
                commentary={wishListElement.commentary}
                link={wishListElement.link}
                key={index}
                wishlistArr={this.state.wishlistArr}
              />
            );
          })}
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default PrincipalPage;
