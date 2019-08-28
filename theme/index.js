const fs = require("fs");
const path = require("path");
const gls = require("./glsfiles");

module.exports = function(obj) {
    var html = "";
    console.log("index.js");
    console.log(obj);
    var fname = obj.data.root.fname;
    var slash = fname.lastIndexOf("/");
    var dirname = fname.substring(0, slash);
    console.log(dirname);
    var files = fs.readdirSync(dirname);
    for(var file of files) {
        var fname = path.join(dirname, file);
        var url = fname.replace(obj.data.root.contentDir, "");
        if (fs.lstatSync(fname).isDirectory()) {
            var lines = gls.readTextFile(fname + "/index.md");
            var topic = lines[0].replaceAll("#", '');
            html += `<li><b><a href=${url}>${topic}</a><b></li>`;
        }
    }
    for(var file of files) {
        if (file.endsWith(".md") && (file !== "index.md") && (file !== "readme.md")) {
            var url = fname.replace(obj.data.root.contentDir, "");
            html += `<li><a href=${url}>${file}</a></li>`;
        }
    }
    return html;
}