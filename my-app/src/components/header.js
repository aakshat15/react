import { Component } from "react";
import beautyData from "./beautyData";
import furniture from "./furniture";
import sunglasses from "./sunglasses";

import "./Header.css";


export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      page: beautyData,
        };
  }

  setPage = (page) => {
    this.setState({ page });
  };

  render() {
    return (
      <>
        <div>
          <button id="btn" onClick={() => this.setPage(beautyData)}>Beauty</button>
          <button id="btn" onClick={() => this.setPage(furniture)}>furniture</button>
          <button id="btn" onClick={() => this.setPage(sunglasses)}>sunglasses</button>
        </div>

          <table width="100%" border="1">
            <thead>
              <tr>
                <td>Title</td>
                <td>Image</td>
                <td>Price</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
              {this.state.page.map((product, index) => (
                <tr key={index}>
                  <td>{product.title}</td>
                  <td>
                    <img src={product.thumbnail} width="100px" height="100px" alt={product.title} />
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <button>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </>
    );
  }
}
