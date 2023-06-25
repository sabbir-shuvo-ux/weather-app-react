import React from "react";

const SearchBox = () => {
  return (
    <div className="mt-8 text-center">
      <input
        className="bg-transparent border-white border px-4 py-[0.5rem] rounded-2xl outline-none text-white capitalize"
        type="text"
        placeholder="Enter City Name"
      />
    </div>
  );
};

export default SearchBox;
