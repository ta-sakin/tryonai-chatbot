import express, { type Request, Response, NextFunction } from "express";
// import { registerRoutes } from "./routes";
import { log } from "./utils";
import "dotenv/config";
// import { setupVite, serveStatic, log } from "../vite";
import cors from "cors";
import tryonRoutes from "./routes";

// Check if we're running on Vercel (serverless environment)

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

// Add logging middleware (only for local development)
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});
app.use("/api", tryonRoutes);
app.get("/api", (req: Request, res: Response) => {
  res.send("Hello from the application API!");
});
// For local development: full server setup
// (async () => {
//   const server = (await registerRoutes(
//     app,
//     process.env.NODE_ENV === "development"
//   )) as any;

//   app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
//     const status = err.status || err.statusCode || 500;
//     const message = err.message || "Internal Server Error";
//     res.status(status).json({ message });
//     throw err;
//   });

//   // importantly only setup vite in development and after
//   // setting up all the other routes so the catch-all route
//   // doesn't interfere with the other routes
//   // if (app.get("env") === "development") {
//   //   await setupVite(app, server);
//   // } else {
//   //   serveStatic(app);
//   // }

//   // ALWAYS serve the app on port 5000
//   // this serves both the API and the client.
//   // It is the only port that is not firewalled.
//   const port = process.env.PORT || 5000;
//   server.listen(port, () => {
//     log(`serving on port ${port}`);
//   });
// })();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`serving on port ${port}`);
});
