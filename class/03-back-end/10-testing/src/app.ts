import express from "express";
import userRouter from "./routers/user-router";

const app = express();

app.use("/api/v1/users", userRouter);

const PORT = 8000;
app.listen(PORT, () =>
  console.info(`Server is running on http://localhost:${PORT}`)
);

export default app;
