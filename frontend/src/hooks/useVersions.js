import { useEffect, useState } from "react";
import { fetchVersions, saveVersion as apiSaveVersion } from "../services/api";

export default function useVersions() {
  const [text, setText] = useState("");
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchVersions();
        setVersions(data.slice().reverse());
      } catch (err) {
        setError(err.message || "Failed to load versions");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const saveVersion = async () => {
    try {
      setSaving(true);
      setError("");
      const newEntry = await apiSaveVersion(text);
      setVersions((prev) => [newEntry, ...prev]);
    } catch (err) {
      setError(err.message || "Failed to save version");
    } finally {
      setSaving(false);
    }
  };

  return {
    text,
    setText,
    versions,
    loading,
    saving,
    error,
    saveVersion,
  };
}
