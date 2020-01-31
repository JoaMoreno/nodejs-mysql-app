const pool = require("../database")
const linksCtrl = {};

linksCtrl.getAdd = async(req, res) =>{
    res.render("links/add")
}
linksCtrl.postAdd = async(req, res) =>{
    res.send("received")
}

module.exports = linksCtrl