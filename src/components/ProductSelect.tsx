import { IProduct } from "../utils/interfaces/IProducts";


interface Props {
    products : IProduct[];
    selectedProduct:string,
    onChange : (productID: string) => void;
}

export const ProductSelect: React.FC<Props> = ({ products, selectedProduct, onChange }) => {
    return (
        <div className="special-form__field">
      <label htmlFor="product" className="special-form__label">
        Producto:
      </label>
      <select
        id="product"
        value={selectedProduct}
        onChange={(e) => onChange(e.target.value)}
        className="special-form__select"
        required
      >
        <option value="">Selecciona un producto</option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>
            {product.name}
          </option>
        ))}
      </select>
    </div>
    )
}
