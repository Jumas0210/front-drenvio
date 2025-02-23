import { useEffect, useState } from "react";
import { Header } from "../components/Header"
import { IProduct } from "../utils/interfaces/IProducts";
import axios from "axios";
import { IResponse } from "../utils/interfaces/IResponse";
import { ProductSelect } from "../components/ProductSelect";
import { PriceInput } from "../components/PriceInput";
import { FormMessage } from "../components/FormMessage";
import { ISpecial } from "../utils/interfaces/ISpecial";
import "../styles/SpecialForm.css";
import { useUser } from "../hooks/useUser";

export const SpecialForm = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<string>('');
    const [newPrice, setNewPrice] = useState<number | ''>('');
    const [message, setMessage] = useState<string>('');

    const {userID} = useUser(); 

    useEffect(() => {
            getData();
        }, []); 

 
    const getData = async () => {
        try {
          const response = await axios.get<IResponse<IProduct[]>>("http://localhost:5000/products");
          console.log(response.data);
          console.log(response.data.data);
          setProducts(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

     
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        try {
          const payload = {
            userID: userID,       
            productID: selectedProduct,
            specialPrice: newPrice,
          };
      
          const specialPriceResponse = await axios.post<IResponse<ISpecial>>('http://localhost:5000/special', payload);
          setMessage(specialPriceResponse.data.msg);
          setNewPrice('');
        } catch (error: any) {
          if (error.response && error.response.data && error.response.data.msg) {
            setMessage(error.response.data.msg);
          } else {
            setMessage('Error al enviar la solicitud.');
          }
        }
      };

    return (
      <div className="app-container">
      <Header />
      <main className="special-form">
        <div className="special-form__container">
          <h1 className="special-form__title">Solicita un descuento</h1>
          <form onSubmit={handleSubmit} className="special-form__form">
            <ProductSelect products={products} selectedProduct={selectedProduct} onChange={setSelectedProduct} />
            <PriceInput price={newPrice} onChange={setNewPrice} />
            <button type="submit" className="special-form__submit">
              Solicitar Descuento
            </button>
          </form>
          <FormMessage message={message} />
        </div>
      </main>
    </div>
    )
}