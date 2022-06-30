import axios from "axios";
import Cache from "cache";
import logger from "./logger";
import express from "express";
import color from "colors-cli";
import { renderFile } from "ejs";

const app = express();
const cache = new Cache(10 * 1000);
const port = process.env.PORT || 8080;

app.engine("html", renderFile);

app.set("view engine", "html");
app.set("views", "./frontend");
app.use("/public", express.static("./frontend/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/fetch/:text", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");

  const got = cache.get(req.params.text);

  if (!got) {
    axios
      .get(
        "https://placehold.co/600x400/000000/FFF?font=raleway&text=" +
          req.params.text
      )
      .then((resp) => {
        cache.put(req.params.text, resp.data)
        res.send(resp.data);
      });
  } else {
    res.send(got)
  }
});

app.use((req, res, next) => {
  res.status(404).render("error/404");
});

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).render("error/500", {
    err,
  });
});

app.listen(port, () => {
  logger.notice(`listening on ${color.yellow(`http://localhost:${port}`)}`);
});
