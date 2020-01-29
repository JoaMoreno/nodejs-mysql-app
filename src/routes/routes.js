const { Router } = require("express");
const router = Router();

const guide = require("./guide.routes")

const authentication = require("./authentication.routes")
const links = require("./links.routes")

router.use("/links",links)
router.use("/log",authentication)
router.use("/", guide)
module.exports = router;