import React from "react";

const SearchInput = ({ type, placeholder, value, onChange, ariaLabel }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full md:w-1/3 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    value={value}
    onChange={onChange}
    aria-label={ariaLabel}
  />
);

export default SearchInput;