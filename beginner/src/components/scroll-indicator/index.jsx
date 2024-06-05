import { useEffect, useState } from "react";

export function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [scsrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const res = await fetch(getUrl);
      const data = await res.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  function handleScrollIndicator() {
    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.documentElement.clientHeight);

    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage(Math.ceil((howMuchScrolled / height) * 100));
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollIndicator);

    return () => {
      window.removeEventListener("scroll", handleScrollIndicator);
    };
  }, []);

  //   console.log(scsrollPercentage);

  if (errorMsg) return <div className="text-5xl">{errorMsg}</div>;

  if (loading) return <div className="text-5xl">loading data.......</div>;

  return (
    <div className="text-center">
      <div className="h-20 text-center bg-[#075b0a] fixed top-0 w-full text-3xl text-white ">
        <h1>Scroll indicator</h1>
        <div className="h-2 bg-black mt-9">
          <div className="h-2 bg-[#aaf900]" style={{ width: `${scsrollPercentage}%` }}></div>
        </div>
      </div>
      <div className="mt-20">
        {data && data.length > 0 && data.map((item) => <p key={item.title}>{item.title}</p>)}
      </div>
    </div>
  );
}
