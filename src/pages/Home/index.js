import { useEffect, useState } from "react";
import { getProductList } from "../../services/productsService";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProducts(result);
    }
    fetchApi();
  }, []);

  return (
    <>
      <div className="product">
        {products.map(item => (
          <div className="product__item">
            <img className="product__image" src={item.thumbnail} alt={item.title} />
            <h3 className="product__title">
              {item.title}
            </h3>
            <div className="product__price-new">
              {(item.price * (100 - item.discountPercentage) / 100).toFixed(0)}$
            </div>
            <div className="product__price-old">
              {item.price}$
            </div>
            <div className="product__percent">
              {item.discountPercentage}%
            </div>
            <button>Them vao gio hang</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home;