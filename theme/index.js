const fs = require("fs");
const path = require("path");
const gls = module.parent.require("glsfiles");

module.exports = function(obj) {
    var html = "";
    console.log("index.js");
    console.log(obj);
    var mdFname = obj.data.root.mdFname;
    var slash = mdFname.lastIndexOf("/");
    var dirname = mdFname.substring(0, slash);
    console.log(dirname);
    var files = fs.readdirSync(dirname);
    for(var file of files) {
        var mdFname = path.join(dirname, file);
        var url = mdFname.replace(obj.data.root.contentDir, "");
        if (fs.lstatSync(mdFname).isDirectory()) {
            var lines = gls.readTextFile(mdFname + "/index.md");
            var topic = lines[0].replaceAll("#", '').trim();
            html += `<li><u><a href=${url}>${topic}</a></u></li>`;
        }
    }
    for(var file of files) {
        if (file.endsWith(".md") && (file !== "index.md") && (file !== "readme.md")) {
            var mdFname = path.join(dirname, file);
            var url = mdFname.replace(obj.data.root.contentDir, "");
            var lines = gls.readTextFile(mdFname);
            var topic = lines[0].replaceAll("#", '').trim();
            html += `<li><a href=${url}>${topic}</a></li>`;
        }
    }
    if (html) {
        html = `<h2>Index</h2><ul>${html}</ul>`;
    }
    return html;
}
