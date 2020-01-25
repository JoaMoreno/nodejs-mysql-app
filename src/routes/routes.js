const { Router } = require("express");
const router = Router();

const authentication = require("./authentication.routes")
const links = require("./links.routes")

router.use("/links",links)
router.use("/log",authentication)

module.exports = router;