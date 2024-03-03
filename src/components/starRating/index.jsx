import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

export function StarRating({ count = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="min-h-screen w-full flex justify-center">
      {[...Array(count)].map((_, index) => {
        index += 1;

        return (
          <FaRegStar
            key={index}
            style={{ backgroundColor: index <= (hover || rating) ? "Blue" : "White" }}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
