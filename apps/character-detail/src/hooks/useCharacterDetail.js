import { useEffect, useState } from "react";
import { logError, logInfo } from "../utils/logger";
import { getCharacterDetail } from "../services/characterApi";

export default function useCharacterDetail(characterId) {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadCharacter() {
      setLoading(true);
      setError("");

      try {
        const data = await getCharacterDetail(characterId, controller.signal);

        setCharacter(data.character);
        setEpisodes(data.episodes);
        logInfo("character_detail_loaded", {
          characterId,
          episodes: data.episodes.length,
        });
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message);
          logError("character_detail_load_error", requestError);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadCharacter();

    return () => {
      controller.abort();
    };
  }, [characterId]);

  return {
    character,
    episodes,
    loading,
    error,
  };
}
