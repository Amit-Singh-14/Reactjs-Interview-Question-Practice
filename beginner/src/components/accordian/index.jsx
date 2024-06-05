import { useState } from "react";
import data from "./data";
export function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [mutipleId, setMultipleId] = useState([]);

  function handleSelection(getdataId) {
    setSelected(getdataId === selected ? null : getdataId);
  }

  function handleMultipleSelection(getdataId) {
    const cyMultipleId = [...mutipleId];
    const index = cyMultipleId.indexOf(getdataId);
    index !== -1 ? cyMultipleId.splice(index, 1) : cyMultipleId.push(getdataId);
    setMultipleId(cyMultipleId);
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-slate-400">
      <div className="flex flex-col gap-5">
        <button
          className=" p-5 rounded-lg bg-gray-600 text-white outline-none border-none"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable {enableMultiSelection ? "Single" : "Multi"} Selection
        </button>
        {data && data.length > 0 ? (
          <div className="bg-white">
            {data.map((dataitem) => (
              <div
                className="p-10"
                key={dataitem.id}
                onClick={() =>
                  enableMultiSelection
                    ? handleMultipleSelection(dataitem.id)
                    : handleSelection(dataitem.id)
                }
              >
                <div className="w-[500px] cursor-pointer">
                  <div className="flex w-full justify-between">
                    <h2>{dataitem.question}</h2>
                    <span>+</span>
                  </div>
                  {enableMultiSelection
                    ? mutipleId.indexOf(dataitem.id) !== -1 && <div>{dataitem.answer}</div>
                    : selected === dataitem.id && <div>{dataitem.answer}</div>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
