import React from "react";
import type { CompanySearch } from "../company";
import AddPortfolio from "./Portfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Card = ({ id, searchResult, onPortfolioCreate }: Props) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md border border-gray-700 p-5 hover:shadow-lg   flex items-center justify-between space-x-6">
      {/* Left info section */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/company/${searchResult.symbol}`}
          className="text-xl font-semibold text-indigo-400 hover:underline truncate"
        >
          {searchResult.name}
        </Link>
        <p className="text-sm text-gray-400 truncate">{searchResult.symbol}</p>
        <div className="flex space-x-4 mt-2 text-sm text-gray-300">
          <p>
            <span className="font-semibold text-gray-200">Currency:</span>{" "}
            {searchResult.currency}
          </p>
          <p>
            <span className="font-semibold text-gray-200">Exchange:</span>{" "}
            {searchResult.exchangeFullName} ({searchResult.exchange})
          </p>
        </div>
      </div>

      {/* Right button section */}
      <div>
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
    </div>
  );
};

export default Card;
