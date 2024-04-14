import { useState } from "react";

export function Tab({ tabContent, onChange }) {
  const [tabContentIndex, setTabContentIndex] = useState(0);

  function handleClick(getIndex) {
    setTabContentIndex(getIndex);
    onChange(getIndex);
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-blue-950 text-emerald-50">
      <div className="text-center">
        <div className="flex gap-3`">
          {tabContent.map((tab, index) => (
            <button
              className={`border border-white p-8 text-3xl grow ${
                tabContentIndex === index && "bg-green-400"
              }`}
              key={tab.label}
              onClick={() => handleClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white text-red-500 mt-4 p-10 text-3xl">
          {tabContent[tabContentIndex] && <span>{tabContent[tabContentIndex].content}</span>}
        </div>
      </div>
    </div>
  );
}
