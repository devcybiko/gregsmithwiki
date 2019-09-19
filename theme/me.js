const fs = require("fs");
const path = require("path");
const gls = require("./glsfiles");

module.exports = function(obj) {
    var html = "";
    console.log("me.js");
    console.log(obj);
    let name = "1. General Principles"
    let url = name;
    url = url.replaceAll("#", '').trim();
    url = "#" + url.toLowerCase().replaceAll(' ', '-').replaceAll('[^-a-z0-9]', '');
    html += `<a href=${url}><small>(me)</small></a>`;        
    return html;
}