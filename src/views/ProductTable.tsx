import { useEffect, useState } from "react";
import { Header } from "../components/Header"
import axios from "axios"
import { IProduct } from "../utils/interfaces/IProducts";
import { IResponse } from "../utils/interfaces/IResponse";
import { ProductTableRow } from "../components/ProductTableRow";
import "../styles/ProductTable.css";
import { useUser } from "../hooks/useUser";


export const ProductTable = () => {

    const [data, setData] = useState<IProduct[]>([]);

    const API_URL = import.meta.env.VITE_API_URL;

    const {userID} = useUser(); // se llama el id del usuario que proviene del contexto

    useEffect(()=>{
        getData();
    },[])

    const getData = async () => {
        try {
          const response = await axios.get<IResponse<IProduct[]>>(`${API_URL}/special/${userID}`);
          console.log(response.data);
          console.log(response.data.data);
          setData(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    return (
        <div className="app-container">
        <Header />
        <main className="product-table-view">
          <section className="product-table-container">
            <h2 className="product-table__title">Tabla de Productos</h2>
              <div className="table-responsive">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Precio Especial</th>
                      <th>Categoría</th>
                      <th>Stock</th>
                      <th>Marca</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((product) => (
                      <ProductTableRow key={product._id} product={product} />
                    ))}
                  </tbody>
                </table>
              </div>
          </section>
        </main>
      </div>
    )
}