import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardList from "./CardList/CardList";
import Search from "./Components/Search/Search";
import type { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import { set } from "mongoose";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
    console.log(search);
  };

  const handleOnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
        handleOnClick={handleOnClick}
        search={search}
        handleChange={handleChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResult={searchResult} />
    </>
  );
}

export default App;
