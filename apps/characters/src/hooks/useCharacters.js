import { useEffect, useState } from "react";
import { getCharacters } from "../services/charactersApi";
import { logError, logInfo } from "../utils/logger";

const initialFilters = {
  name: "",
  status: "",
  species: "",
};

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [searchFilters, setSearchFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function loadCharacters() {
      setLoading(true);
      setError("");
      try {
        const data = await getCharacters(
          {
            ...searchFilters,
            page,
          },
          controller.signal,
        );
        setCharacters(data.results);
        setPages(data.info.pages);
        setTotal(data.info.count);
        logInfo("characters_loaded", {
          page,
          total: data.info.count,
        });
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message);
          logError("character_load_error", requestError);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    loadCharacters();

    return () => {
      controller.abort();
    };
  }, [page, searchFilters]);

  function updateFilter(event) {
    const { name, value } = event.target;

    setFilters({
      ...filters,
      [name]: value,
    });
  }

  function searchCharacters(event) {
    event.preventDefault();

    setPage(1);
    setSearchFilters({ ...filters });
  }

  function clearFilters() {
    setFilters(initialFilters);
    setSearchFilters(initialFilters);
    setPage(1);
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (page < pages) {
      setPage(page + 1);
    }
  }

  return {
    characters,
    filters,
    page,
    pages,
    total,
    loading,
    error,
    updateFilter,
    searchCharacters,
    clearFilters,
    previousPage,
    nextPage,
  };
}
