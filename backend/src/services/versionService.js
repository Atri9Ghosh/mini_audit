import fs from "fs-extra";
import { v4 as uuid } from "uuid";
import { computeDiff } from "./diffService.js";

const FILE_PATH = "./src/data/versions.json";

export async function getAllVersions() {
  await fs.ensureFile(FILE_PATH);
  try {
    return await fs.readJSON(FILE_PATH);
  } catch {
    return [];
  }
}

export async function saveNewVersion(text) {
  const versions = await getAllVersions();

  const previous = versions[versions.length - 1];
  const previousText = previous ? previous.fullText : "";

  const { addedWords, removedWords } = computeDiff(previousText, text);

  const entry = {
    id: uuid(),
    timestamp: new Date().toISOString(),
    addedWords,
    removedWords,
    oldLength: previousText.length,
    newLength: text.length,
    fullText: text,
  };

  versions.push(entry);
  await fs.writeJSON(FILE_PATH, versions, { spaces: 2 });

  return entry;
}
