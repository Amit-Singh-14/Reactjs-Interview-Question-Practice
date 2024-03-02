import { useEffect, useState } from "react";

export function RandamColorGenator() {
  const [color, setColor] = useState("#fffff");
  const [generateHexColor, setGenerateHexColor] = useState(true);

  function randomValue(range) {
    return Math.floor(Math.random() * range);
  }

  function generateHexRandomColor() {
    let color = "0123456789ABCEF";
    let hexvalue = "#";
    for (let i = 0; i < 6; i++) {
      hexvalue += color[randomValue(15)];
    }
    setColor(hexvalue);
  }

  function generateRGBRandomColor() {
    let first = randomValue(255);
    let second = randomValue(255);
    let third = randomValue(255);
    let RGBValue = `rgb(${first}, ${second}, ${third})`;
    setColor(RGBValue);
  }

  useEffect(() => {
    generateHexColor ? generateHexRandomColor() : generateRGBRandomColor();
  }, [generateHexColor]);

  return (
    <div style={{ backgroundColor: color }} className={`min-h-screen w-full text-center`}>
      <div className="w-full p-10 flex gap-5 justify-center">
        <button className="border p-3" onClick={() => setGenerateHexColor(true)}>
          Create HEX color
        </button>
        <button className="border p-3" onClick={() => setGenerateHexColor(false)}>
          Create RGB Color
        </button>
        <button
          className="border p-3"
          onClick={generateHexColor ? generateHexRandomColor : generateRGBRandomColor}
        >
          GenerateRandom Color
        </button>
      </div>
      <div className="text-5xl text-white">
        <p>{color}</p>
      </div>
    </div>
  );
}
