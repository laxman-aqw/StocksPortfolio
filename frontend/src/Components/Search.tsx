import React from "react";

interface Props {
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  search: string | undefined;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  serverError: string;
}

const Search = ({
  onSearchSubmit,
  onSearchChange,
  search,
  serverError,
}: Props) => {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-center bg-gray-900 px-4 text-center rounded-md">
      <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl">
        Lookup Stock Tickers
      </h1>
      <p className="text-gray-300 text-base mb-6 max-w-lg">
        Enter a ticker symbol (e.g., AAPL, TSLA) to get the latest stock info.
      </p>

      <form
        onSubmit={onSearchSubmit}
        className="w-full max-w-md flex rounded overflow-hidden shadow-lg bg-gray-800"
        spellCheck={false}
      >
        <input
          type="text"
          placeholder="Enter ticker symbol (e.g., AAPL)"
          className="flex-grow px-3 py-2 text-gray-200 bg-gray-800 placeholder-gray-400 uppercase tracking-wide font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search || ""}
          onChange={onSearchChange}
          aria-label="Ticker symbol input"
          maxLength={5}
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 font-semibold transition-colors"
          aria-label="Submit ticker search"
        >
          Search
        </button>
      </form>
      {serverError && (
        <div
          className="mt-6 flex items-start gap-3 max-w-md bg-red-600/10 border border-red-500 text-red-600 px-4 py-3 rounded shadow-md animate-pulse"
          role="alert"
        >
          <p className="text-sm font-medium">{serverError}</p>
        </div>
      )}
    </section>
  );
};

export default Search;
