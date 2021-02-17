import { get } from "https";
import { createServer } from "http";
import { exit } from "process";

const token = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;
const port = process.env.PORT || 8000;

const base = `https://api.telegram.org/bot${token}/`;

function boot(start) {
    if (!start) {
        console.log("Invalid Token");
        exit(-1);
    }
    createServer({}, (req, res) => {
        if (!req.url.split("?")[1]) {
            res.writeHead(401);
            return res.end();
        }
        const urlParams = new URLSearchParams(req.url.split("?")[1]);
        const message = urlParams.get("message");
        if (!message) {
            res.writeHead(401);
            return res.end();
        }
        get(
            base +
                `sendMessage?chat_id=${encodeURIComponent(
                    clientId
                )}&text=${encodeURIComponent(message)}`
        );
        res.writeHead(200);
        res.end();
    }).listen(port);

    console.log(`Listening on port ${port}...`);
}

get(base + `getMe`, (res) =>
    res.on("data", (chuck) => boot(JSON.parse(chuck.toString()).ok))
);
