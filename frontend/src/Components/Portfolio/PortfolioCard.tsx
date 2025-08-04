import React from "react";

interface Props {
  portfolioValues: string;
}

const PortfolioCard = ({ portfolioValues }: Props) => {
  return <div>{portfolioValues}</div>;
};

export default PortfolioCard;
