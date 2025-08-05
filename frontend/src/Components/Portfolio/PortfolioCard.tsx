import React, { type SyntheticEvent } from "react";
import DeletePortfolio from "./DeletePortfolio";

interface Props {
  portfolioValues: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const PortfolioCard = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-t-lg px-4 py-2 mr-2 cursor-default select-none shadow-sm hover:bg-gray-200">
      <span className="font-medium text-gray-800">{portfolioValues}</span>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValues={portfolioValues}
      />
    </div>
  );
};

export default PortfolioCard;
