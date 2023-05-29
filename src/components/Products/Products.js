import React, { useContext } from "react";
import "./Products.css";
import Filter from "./Filter/Filter";
import { FilterContext } from "../Context/ContextFilter";
import Card from "./Card/Card";

export default function Products() {
  const { state } = useContext(FilterContext);

  const productsList = state.filteredItems.filter((product) => {
    return product.title.includes(state.searchKey) || !state.searchKey;
  });
  return (
    <>
      <Filter />
        <div className="product_container">
        {productsList.length > 0 ? (
          productsList.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <div className="not_products">
            <img
              className="products_empty_img"
              src="images/bare-tree.png"
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
}
