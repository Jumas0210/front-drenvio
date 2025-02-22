import React from "react";
import { IProduct } from "../utils/interfaces/IProducts";


interface Props {
    product: IProduct
}

export const ProductTableRow : React.FC<Props> = ({product}) =>{
    return (
        <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.specialPrice !== null ? product.specialPrice : '-'}</td>
        <td>{product.category}</td>
        <td>{product.stock}</td>
        <td>{product.brand}</td>
      </tr>
    )
}