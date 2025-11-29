import express from "express";
import {
  getVersions,
  postVersion,
} from "../controllers/versionController.js";

const router = express.Router();

router.get("/versions", getVersions);
router.post("/save-version", postVersion);

export default router;
