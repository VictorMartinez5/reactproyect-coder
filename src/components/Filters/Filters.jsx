import { useState } from "react";
import "./Filters.css";

const Filters = ({changeFilters}) => {
    const [minPrice, setMinPrice] = useState(0)

const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
    changeFilters(prevState => ({
        ...prevState,
        minPrice: e.target.value
    }))
}

const handleChangeCategory = (e) => {
    changeFilters(prevState=>({
        ...prevState,
        category: e.target.value
    }))
}

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min="0" max="1000" onChange={handleChangeMinPrice} />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category" onChange={handleChangeCategory}>
            <option value="all">all</option>
            <option value="men's clothing">men s clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="women's clothing">women s clothing</option>
            <option value="electronics">electronics</option>
        </select>
      </div>
    </section>
  );
};


export default Filters