import {
  getAllVersions,
  saveNewVersion,
} from "../services/versionService.js";

export async function getVersions(req, res) {
  try {
    const versions = await getAllVersions();
    res.json(versions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load versions" });
  }
}

export async function postVersion(req, res) {
  try {
    const { text } = req.body;
    if (typeof text !== "string") {
      return res.status(400).json({ error: "Invalid text" });
    }

    const entry = await saveNewVersion(text);
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save version" });
  }
}
