const fs = module.parent.require("fs");
const path = module.require("path");
const gls = module.parent.require("glsfiles");

module.exports = function(obj) {
    var html = "";
    var name = arguments[0].name;
    var hash = arguments[0].hash;
    var data = arguments[0].data;

    //console.log("greg.js");
    console.log(arguments);
    return `<img width=32 title="Greg Says..." alt="Greg Says..." src="https://greg-smith.com/static/images/greg-icon-redonwhite.png"/><i>"${hash.says}"</i>`;
}
