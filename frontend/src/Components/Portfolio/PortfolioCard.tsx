import React, { type SyntheticEvent } from "react";
import DeletePortfolio from "./DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  portfolioValues: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const PortfolioCard = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mr-3 cursor-default select-none shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link
        to={`/company/${portfolioValues}`}
        className="font-medium text-gray-200"
      >
        {portfolioValues}
      </Link>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValues={portfolioValues}
      />
    </div>
  );
};

export default PortfolioCard;
