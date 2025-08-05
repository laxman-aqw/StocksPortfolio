import React, { type SyntheticEvent } from "react";
import PortfolioCard from "./PortfolioCard";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const PortfolioList = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-indigo-400 mb-6">My Portfolio</h1>

      <div
        className="flex space-x-4 overflow-x-auto py-3 px-2
                   border border-gray-700 rounded-lg
                   scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-800"
      >
        {portfolioValues && portfolioValues.length > 0 ? (
          portfolioValues.map((pv, idx) => (
            <PortfolioCard
              key={idx}
              portfolioValues={pv}
              onPortfolioDelete={onPortfolioDelete}
            />
          ))
        ) : (
          <p className="text-gray-400 italic">No portfolio items added yet.</p>
        )}
      </div>
    </section>
  );
};

export default PortfolioList;
