const fs = require("fs");
const path = require("path");
const gls = require("./glsfiles");

module.exports = function(obj) {
    var html = "";
    var title = "<h2>Table of Contents</h2>"
    console.log("toc.js");
    console.log(obj);
    var mdFname = obj.data.root.mdFname;
    var lines = gls.readTextFile(mdFname);
    var currIndent = 1;
    for(var line of lines) {
        if (line.startsWith("#")) {
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
            line = line.replaceAll("#", '').trim();
            url = "#" + line.toLowerCase().replaceAll(' ', '-').replaceAll('[^a-z0-9]', '');
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