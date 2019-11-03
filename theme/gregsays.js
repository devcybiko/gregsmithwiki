const fs = module.parent.require("fs");
const path = module.require("path");
const gls = module.parent.require("glsfiles");

module.exports = function(obj) {
    var html = "";
    console.log("gregsays.js");
    console.log(obj);
    return `<img alt="Greg Says..." src="https://greg-smith.com/static/images/greg-icon-redonwhite.png"/>`;
}
