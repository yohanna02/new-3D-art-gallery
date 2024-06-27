import express from "express";
import path from "path";

const app = express();

app.use(express.static("./src/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Listening on port ' + PORT));