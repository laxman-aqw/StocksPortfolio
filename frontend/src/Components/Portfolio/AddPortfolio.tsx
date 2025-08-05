import React from "react";

interface Props {
  onPortfolioCreate: (e: React.FormEvent<HTMLFormElement>) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate} className="mt-4 ">
      <input type="hidden" name="symbol" value={symbol} />
      <button
        type="submit"
        className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-2 py-1 hover:scale-105"
        aria-label={`Add ${symbol} to portfolio`}
      >
        Add
      </button>
    </form>
  );
};

export default AddPortfolio;
