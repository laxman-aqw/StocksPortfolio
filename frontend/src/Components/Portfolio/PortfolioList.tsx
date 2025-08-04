import React from "react";
import PortfolioCard from "./PortfolioCard";

interface Props {
  portfolioValues: string[];
}

const PortfolioList = ({ portfolioValues }: Props) => {
  return (
    <>
      <h1>My portfolio</h1>
      <ul>
        {portfolioValues &&
          portfolioValues.map((pv) => {
            return <PortfolioCard portfolioValues={pv} />;
          })}
      </ul>
    </>
  );
};

export default PortfolioList;
