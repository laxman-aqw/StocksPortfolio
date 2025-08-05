import React, { type SyntheticEvent } from "react";
import PortfolioCard from "./PortfolioCard";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const PortfolioList = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">My Portfolio</h1>
      <div className="flex space-x-2 overflow-x-auto border-b border-gray-300 px-2 py-1 bg-white">
        {portfolioValues &&
          portfolioValues.map((pv, idx) => (
            <PortfolioCard
              key={idx}
              portfolioValues={pv}
              onPortfolioDelete={onPortfolioDelete}
            />
          ))}
      </div>
    </>
  );
};

export default PortfolioList;
