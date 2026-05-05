import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 3500;
const DIR = __dirname;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/exercise-1.html") {
    fs.readFile(path.join(DIR, "exercise-1.html"), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/exercise-1.js") {
    fs.readFile(path.join(DIR, "exercise-1.js"), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log("Server is running, waiting for requests...");
});
