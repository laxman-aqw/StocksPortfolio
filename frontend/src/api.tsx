import axios from "axios";
import type { CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.status == 200) {
      return response.data;
    } else {
      console.log("failed to fetch companies");
      return "failed to fetch companies";
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      return error.message;
    } else {
      console.log("unexpected error", error);
      return "An unexpected error occurred";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const response = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (response.status == 200) {
      return response.data;
    } else {
      console.log("failed to fetch companies");
      return "failed to fetch companies";
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      return error.message;
    } else {
      console.log("unexpected error", error);
      return "An unexpected error occurred";
    }
  }
};
