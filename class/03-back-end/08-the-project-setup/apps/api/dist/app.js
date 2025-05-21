import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.get("/api/v1/health", (_req, res) => {
    res.status(200).json({ message: "API running!" });
});
app.listen(PORT, () => console.info(`Server is running on http://localhost:${PORT}`));
