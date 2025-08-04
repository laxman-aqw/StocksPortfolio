import { useState, type SyntheticEvent } from "react";
import "./App.css";
import CardList from "./CardList/CardList";
import Search from "./Components/Search";
import type { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import PortfolioList from "./Components/Portfolio/PortfolioList";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>();
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
    console.log(search);
  };

  const onPortfolioCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === search);
    if (exists) {
      return;
    }
    const updatedPortfolioValues = [...portfolioValues, search];
    setPortfolioValues(updatedPortfolioValues);
    console.log("the updated portfolio values are", updatedPortfolioValues);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!search || search.trim() === "") {
      setServerError("Please enter a search term.");
      return;
    }
    const response = await searchCompanies(search);
    if (typeof response === "string") {
      setServerError(response);
      console.log(serverError);
    } else if (Array.isArray(response)) {
      {
        setSearchResult(response);
      }
    }
    console.log(response);
  };
  return (
    <>
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        onSearchChange={onSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <PortfolioList portfolioValues={portfolioValues} />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </>
  );
}

export default App;
