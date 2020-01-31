const { Router } = require("express");
const router = Router();

const linksCtrl = require("../controllers/links.controller")

router.route("/add")
    .get(linksCtrl.getAdd)
    .post(linksCtrl.postAdd)

module.exports = router;