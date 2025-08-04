import React from "react";
import Card from "../Components/Card/Card";
import type { CompanySearch } from "../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResult: CompanySearch[];
}

const CardList = ({ searchResult }: Props) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {searchResult.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResult.map((result) => (
            <Card
              searchResult={result}
              id={result.symbol}
              key={uuidv4()} // optional: use result.symbol for stable key
            />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-lg text-gray-500 mt-10">No result</h1>
      )}
    </div>
  );
};

export default CardList;
