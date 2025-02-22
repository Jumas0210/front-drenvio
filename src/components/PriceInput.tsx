

interface Props {
    price: number | string;
    onChange: (price:number) =>void
}

export const PriceInput: React.FC<Props> = ({ price, onChange }) => {
    return (
      <div className="special-form__field">
      <label htmlFor="price" className="special-form__label">
        Nuevo precio:
      </label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => onChange(Number(e.target.value))}
        required
        className="special-form__input"
        min="0"
        step="0.01"
      />
    </div>
    );
  };