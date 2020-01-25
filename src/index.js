require("dotenv").config();

const app = require("./app");
const {code} = require("./symbols")

// Start server
async function init(){
    await app.listen(app.get("port"));
    console.log(`${code.ok} Server on http://localhost:${app.get("port")}/`)
}
init();