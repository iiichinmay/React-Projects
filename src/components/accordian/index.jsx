// Accordian.js
import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="acc-wrapper flex flex-col items-center p-6 bg-gradient-to-b from-blue-500 to-purple-700 min-h-screen">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="mb-6 px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-100 transition duration-300"
      >
        Enable Multi Selection
      </button>
      <div className="accordian w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item border-b last:border-none" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title flex justify-between items-center p-4 cursor-pointer bg-blue-100 hover:bg-blue-200 transition duration-200"
              >
                <h3 className="text-lg font-semibold text-blue-900">{dataItem.question}</h3>
                <span className="text-xl text-blue-700">+</span>
              </div>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="acc-content p-4 bg-blue-50 text-blue-900">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content p-4 bg-blue-50 text-blue-900">
                      {dataItem.answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-white">No data found!</div>
        )}
      </div>
    </div>
  );
}
