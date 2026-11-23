import http from "node:http";
import app from "./app.js";
import env from "./config/env.js";
import connectDB from "./config/db.js";
import { initSocket } from "./sockets/socket.js";

async function start() {
  await connectDB();

  const server = http.createServer(app);
  initSocket(server);

  server.listen(env.port, () => {
    console.log(`Karigar API running at http://localhost:${env.port}`);
    console.log(`Health check: http://localhost:${env.port}/api/health`);
  });
}

start().catch((error) => {
  console.error("Failed to start Karigar API:", error);
  process.exit(1);
});
