import React, { useState } from "react";
import { fetchApi } from "../utils/fetchApi";
import { useStateContext } from "../context/StateContext";
import toast from "react-hot-toast";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const { setForeCasteData } = useStateContext();

  // getting api data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      return toast.error("This didn't work.", { duration: 2000 });
    }

    const data = await fetchApi(inputValue);
    if (data) setForeCasteData(data);
    setInputValue("");
  };

  return (
    <div className="mt-8 text-center">
      {/* Search Box and api call from here  */}
      <form onSubmit={handleSubmit} className="relative w-fit mx-auto">
        <input
          value={inputValue}
          className="bg-transparent border-white border px-4 py-[0.5rem] rounded-2xl outline-none text-white capitalize"
          type="text"
          placeholder="Enter City Name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="absolute top-0 right-0 rounded-2xl border border-white p-[0.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
