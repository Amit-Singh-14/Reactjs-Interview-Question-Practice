import { useEffect, useRef, useState } from "react";

export function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevdata) => [...prevdata, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  function onClickLoadMore() {
    setCount(count + 1);
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  if (loading) return <div>Product is loading..........</div>;

  return (
    <div className="min-h-screen w-full text-center">
      <div className="grid grid-cols-4 gap-4">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="border border-black p-2">
              <img src={product.thumbnail} className="h-[200px] w-[400px]" alt="" />
              <p className="mt-5">{product.description}</p>
            </div>
          ))}
      </div>
      <button onClick={onClickLoadMore} className="border border-black p-3 m-1 ">
        Load More Products
      </button>
    </div>
  );
}
