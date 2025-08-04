import React, { useState } from "react";

interface Props {
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  search: string | undefined;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onSearchSubmit, onSearchChange, search }: Props) => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input
          className="border-2"
          value={search}
          onChange={(e) => onSearchChange(e)}
        />
      </form>
    </>
  );
};

export default Search;
