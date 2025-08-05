import React from "react";
import Card from "../Components/Card";
import type { CompanySearch } from "../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CardList = ({ searchResult, onPortfolioCreate }: Props) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-900 min-h-[80vh] rounded-lg">
      {searchResult.length > 0 ? (
        <div className="flex flex-col space-y-6">
          {searchResult.map((result) => (
            <Card
              searchResult={result}
              id={result.symbol}
              key={uuidv4()}
              onPortfolioCreate={onPortfolioCreate}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-lg text-gray-400 mt-10">No result</h1>
      )}
    </div>
  );
};

export default CardList;
