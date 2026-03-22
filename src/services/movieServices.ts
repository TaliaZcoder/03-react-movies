import axios from "axios";
import type { Movie } from "../types/movie";

interface TMDBResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<TMDBResponse>(
    "https://image.tmdb.org/t/p/w500",
    {
      params: { query },
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODE1YmMzMmZiNTU5OGY3ODMxNmU0Mjc1MWU2ODJiZCIsIm5iZiI6MTc3NDE4OTA2OC44NzY5OTk5LCJzdWIiOiI2OWJmZmEwYzE5MWVmMzU4NzgxM2JlMGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HDAXDQhK3efl-aMJW5WJk1P14eKK_dF5EQLZqdZTYak`,
      },
    }
  );

  return response.data.results;
};