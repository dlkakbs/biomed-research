import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

import { createOrchestrator } from "@biomed/orchestration";
import { createPaymentSystem } from "@biomed/payments";
import { connectDatabase } from "@biomed/db";
import { createHttpServer } from "./server/http.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });
dotenv.config({ path: path.resolve(__dirname, "../../../.env.local"), override: true });

async function main() {
  const db = connectDatabase();
  const payments = createPaymentSystem();
  const orchestrator = createOrchestrator({ db, payments });
  const port = Number(process.env.PORT ?? process.env.API_PORT ?? "3001");
  const host = process.env.HOST?.trim() || "0.0.0.0";
  const server = createHttpServer(db);

  console.log("[api] BioMed Research API ready");
  console.log(`[api] payment mode: ${payments.mode}`);
  console.log(`[api] orchestrator: ${orchestrator.name}`);
  console.log(`[api] host: ${host}`);
  console.log(`[api] port source: ${process.env.PORT ? "PORT" : process.env.API_PORT ? "API_PORT" : "default"}`);
  server.listen(port, host, () => {
    console.log(`[api] listening on http://${host}:${port}`);
  });
}

void main();
