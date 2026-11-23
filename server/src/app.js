import path from "node:path";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import env from "./config/env.js";
import routes from "./routes/index.js";
import { errorHandler, notFound } from "./middleware/error.middleware.js";

const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(
  cors({
    origin: env.clientUrl,
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

if (env.nodeEnv === "development") {
  app.use(morgan("dev"));
}

app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 500,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  })
);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

export default app;
