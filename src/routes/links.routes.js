const { Router } = require("express");
const router = Router();

const linksCtrl = require("../controllers/links.controller")

router.get("/add", linksCtrl.add)

module.exports = router;