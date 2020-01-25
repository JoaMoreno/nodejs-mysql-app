const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const exphbs = require("express-handlebars");
const path = require("path");

// Initializations
const app = express();
require("./database")

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handdlebars")
}));
app.set("view engine", ".hbs");

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false})); // no "img"

// Global Variables
app.use((req, res, next) =>{
    next();
});

// Public
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./routes/routes"))
module.exports = app;