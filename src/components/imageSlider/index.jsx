import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit = 10, page = 1 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  function handlePrevious() {
    setActive(active === 0 ? images.length - 1 : active - 1);
  }

  function handleNext() {
    setActive(active === images.length - 1 ? 0 : active + 1);
  }

  async function fetchImages(geturl) {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?pages=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        // console.log(data);
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(url);
  }, []);

  if (loading) return <div>Data is loading.......</div>;

  return (
    <div className=" w-full">
      <div className="w-[600px] flex relative rounded-3xl overflow-hidden mt-5 ml-5">
        <BsArrowLeftCircleFill
          className="absolute z-10 text-4xl text-white self-center left-2 cursor-pointer"
          onClick={handlePrevious}
        />

        {images &&
          images.length > 0 &&
          images.map((image) => (
            <img
              key={image.id}
              src={image.download_url}
              className={`${active != image.id && "hidden"} w-[600px] h-[400px]`}
            />
          ))}

        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute z-10 text-4xl text-white self-center right-2 cursor-pointer"
        />

        <div className="absolute flex w-full gap-1 bottom-2 justify-center">
          {images &&
            images.length > 0 &&
            images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`${active == index ? "bg-red-600" : "bg-white"} rounded-full  w-4 h-4`}
              ></button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
