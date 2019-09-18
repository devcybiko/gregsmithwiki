const fs = require("fs");
const path = require("path");
const gls = require("./glsfiles");

module.exports = function(obj) {
    var html = "";
    var title = `<h2 id="toc">Table of Contents</h2>`;
    console.log("toc.js");
    console.log(obj);
    var mdFname = obj.data.root.mdFname;
    var lines = gls.readTextFile(mdFname);
    var currIndent = 1;
    for(var line of lines) {
        if (line.startsWith("#")) {
            var dollar = line.indexOf(`$`);
            var indent = line.indexOf(' ');
            if (indent === 1) continue;
            while (indent > currIndent) {
                html += "<ul>";
                currIndent++;
            }
            while(indent < currIndent) {
                html += "</ul>";
                currIndent--;
            }
            let url = line;
            if (dollar >= 0) line = line.substring(0, dollar);
            line = line.replaceAll("#", '').trim();
            url = url.replaceAll("#", '').trim();
            line = "#" + line.toLowerCase().replaceAll(' ', '-').replaceAll('[^-a-z0-9]', '');
            url = "#" + url.toLowerCase().replaceAll(' ', '-').replaceAll('[^-a-z0-9]', '');
            html += `<li><a href=${url}>${line}</a></li>`;        
        }
    }
    while(currIndent > 0) {
        html += "</ul>";
        currIndent--
    }
    if (html) {
        html = title + html;
    }
    return html;
}