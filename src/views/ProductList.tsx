import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { IResponse } from "../utils/interfaces/IResponse";
import { IProduct } from "../utils/interfaces/IProducts";
import { Card } from "../components/Card";
import "../styles/ProductList.css"; 
import { useUser } from "../hooks/useUser";

export const ProductList = () => {
    const [data, setData] = useState<IProduct[]>([]);

    const {userID} = useUser(); // se llama el id del usuario que proviene del contexto

    useEffect(() => {
        getData();
    }, []); 

    const getData = async () => {
        const response = await fetch(`http://localhost:5000/special/${userID}`);
        const products: IResponse<IProduct[]> = await response.json();
        console.log(products);
        console.log(products.data);
        setData(products.data);
    };

    return (
    <div className="app-container">
      <Header />
      <main className="product-view">
        <section className="product-list">
          <h2 className="product-list__title">Nuestros Artículos</h2>
            <ul className="product-list__items">
              {data.map((product) => (
                <Card key={product._id} product={product} />
              ))}
            </ul>
        </section>
      </main>
    </div>
    );
};
