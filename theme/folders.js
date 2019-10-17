const fs = require("fs");
const path = require("path");
const gls = module.parent.require("glsfiles");

module.exports = function(obj) {
    var html = "";
    console.log("folders.js");
    console.log(obj);
    var mdFname = obj.data.root.mdFname;
    var slash = mdFname.lastIndexOf("/");
    var dirname = mdFname.substring(0, slash);
    console.log(dirname);
    var files = fs.readdirSync(dirname);
    for(var file of files) {
        var mdFname = path.join(dirname, file);
        var url = mdFname.replace(obj.data.root.contentDir, "");
        if (fs.lstatSync(mdFname).isDirectory() && file[0] !== '.') {
            var topic = "";
            var lines = gls.readTextFile(mdFname + "/index.md");
            console.log(lines);
            if (lines.length === 1 && lines[0] === '') {
                topic = "(" + file + ")";
                html += `<li>${topic}</li>`;
            } else {
                var topic = lines[0].replaceAll("#", '').trim();
                html += `<li><u><a href=${url}>${topic}</a></u></li>`;
            }
        }
    }
    if (html) {
        html = `<h2>Folders</h2><ul>${html}</ul>`;
    }
    return html;
}
