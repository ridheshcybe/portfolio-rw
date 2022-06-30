"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cache_1 = __importDefault(require("cache"));
const logger_1 = __importDefault(require("./logger"));
const express_1 = __importDefault(require("express"));
const colors_cli_1 = __importDefault(require("colors-cli"));
const ejs_1 = require("ejs");
const app = express_1.default();
const cache = new cache_1.default(10 * 1000);
const port = process.env.PORT || 8080;
app.engine("html", ejs_1.renderFile);
app.set("view engine", "html");
app.set("views", "./frontend");
app.use("/public", express_1.default.static("./frontend/public"));
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/fetch/:text", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    const got = cache.get(req.params.text);
    if (!got) {
        axios_1.default
            .get("https://placehold.co/600x400/000000/FFF?font=raleway&text=" +
            req.params.text)
            .then((resp) => {
            cache.put(req.params.text, resp.data);
            res.send(resp.data);
        });
    }
    else {
        res.send(got);
    }
});
app.use((req, res, next) => {
    res.status(404).render("error/404");
});
app.use((err, req, res, next) => {
    logger_1.default.error(err);
    res.status(500).render("error/500", {
        err,
    });
});
app.listen(port, () => {
    logger_1.default.notice(`listening on ${colors_cli_1.default.yellow(`http://localhost:${port}`)}`);
});
