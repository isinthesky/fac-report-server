import express, { NextFunction, Request, Response }  from "express";
import path, { dirname } from "path";
import dotenv from "dotenv";

import { fileURLToPath } from "url";
import { routersLoader } from "./loaders/routers.js";
import { utilsLoader } from "./loaders/utils.js";
import { SERVER_PORT } from "./env.js";

dotenv.config();

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("path", path.join(__dirname, "../views"));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

utilsLoader(app);
routersLoader(app);


app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.log("ERR: ", err);

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(500);
  res.render("error", { error: err });
});

async function main() {
  console.info("main");
}

main();

app.listen(SERVER_PORT, () => console.log("Server Running on Port " + SERVER_PORT));
