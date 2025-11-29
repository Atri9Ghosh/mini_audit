const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export async function fetchVersions() {
  const res = await fetch(`${API_BASE_URL}/versions`);
  if (!res.ok) throw new Error("Failed to load versions");
  return res.json();
}

export async function saveVersion(text) {
  const res = await fetch(`${API_BASE_URL}/save-version`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("Failed to save version");
  return res.json();
}
