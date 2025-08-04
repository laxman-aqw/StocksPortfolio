import React from "react";
import type { CompanySearch } from "../company";
import AddPortfolio from "./Portfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Card = ({ id, searchResult, onPortfolioCreate }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-indigo-600">
          {searchResult.name}
        </h2>
        <p className="text-sm text-gray-500">{searchResult.symbol}</p>
      </div>
      <div className="space-y-1 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">Currency:</span>{" "}
          {searchResult.currency}
        </p>
        <p>
          <span className="font-medium text-gray-900">Exchange:</span>{" "}
          {searchResult.exchangeFullName} ({searchResult.exchange})
        </p>
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
    </div>
  );
};

export default Card;
