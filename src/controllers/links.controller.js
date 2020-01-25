const pool = require("../database")
const linksCtrl = {};

linksCtrl.add = async(req, res) =>{
    res.render("links/add")
}

module.exports = linksCtrl