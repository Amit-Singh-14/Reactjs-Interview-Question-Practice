import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

export function StarRating({ count = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [current, setCurrent] = useState("Normal Selection");

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
    setCurrent("During Hover");
  }

  function handleMouseLeave() {
    setHover(rating);
    setCurrent("Normal Selection");
  }
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-10 bg-gray-700">
      <h1 className="text-5xl text-white ">{current}</h1>
      <div className="flex">
        {[...Array(count)].map((_, index) => {
          index += 1;

          return (
            <FaRegStar
              key={index}
              style={{ color: index <= (hover || rating) ? "red" : "white" }}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={50}
            />
          );
        })}
      </div>
    </div>
  );
}
