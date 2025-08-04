import React from "react";

interface Props {
  onPortfolioCreate: (e: React.FormEvent<HTMLFormElement>) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <>
      <form onSubmit={onPortfolioCreate} action="">
        <input readOnly={true} hidden value={symbol} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddPortfolio;
