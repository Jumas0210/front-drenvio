import React from "react";
import { IProduct } from "../utils/interfaces/IProducts";
import "../styles/Card.css";

interface Props {
    product: IProduct;
}

export const Card: React.FC<Props> = ({ product }) => {
    return (
        <li className="card">
        <div className="card__content">
          <h3 className="card__title">{product.name}</h3>
          <p className="card__brand">{product.brand}</p>
          <p className="card__description">{product.description}</p>
          <p className="card__category">{product.category}</p>
          {product.specialPrice  ? (
           <>
           <div className="card__price-wrapper">
             <span className="card__price-label">Ahora:</span>
             <p className="card__price card__price--special">${product.specialPrice}</p>
           </div>
           <div className="card__price-wrapper">
             <span className="card__price-label">Antes:</span>
             <p className="card__price card__price--original">${product.price}</p>
           </div>
         </>
          ) : (
            <div className="card__price-wrapper">
              <p className="card__price">${product.price}</p>
            </div>
          )}
        </div>
      </li>
    );
};
