import { useEffect, useState } from "react";

export function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${page * 10}`);
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

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setpage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  useEffect(() => {
    // setProducts([]);
    fetchData();
  }, [page]);

  return (
    <div className="min-h-screen w-full text-center">
      <h1 className="text-3xl">Load More Data</h1>
      <div className="grid grid-cols-4 gap-4">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="border border-black p-2 w-full">
              <img src={product.thumbnail} className="h-[200px] w-[400px]" alt="" />
              <p className="mt-5 max-w-full">{product.description}</p>
            </div>
          ))}
      </div>

      {loading && (
        <div className="text-4xl bg-blue-950 text-white">More Products are loading..........</div>
      )}
      {/* <button onClick={onClickLoadMore} className="border border-black p-3 m-1 ">
        Load More Products
      </button> */}
    </div>
  );
}
