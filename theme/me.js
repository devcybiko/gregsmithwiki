module.exports = function(name) {
    var html = "";
    console.log("me.js");
    console.log(name);
    let url = name;
    url = url.replaceAll("#", '').trim();
    url = "#" + url.toLowerCase().replaceAll(' ', '-').replaceAll('[^-a-z0-9]', '');
    html += `<a href=${url}><small><small>(me)</small></small></a>`;        
    return html;
}
