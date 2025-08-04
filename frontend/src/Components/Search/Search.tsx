import React, { useState } from "react";

interface Props {
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  search: string | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ handleOnClick, handleChange, search }: Props) => {
  return (
    <div>
      <input
        className="border-2"
        value={search}
        onChange={(e) => handleChange(e)}
        type="text"
      />
      <button
        className="bg-blue-500 m-2 border-2 border-blue-500 text-white"
        onClick={(e) => handleOnClick(e)}
      >
        Button
      </button>
    </div>
  );
};

export default Search;
