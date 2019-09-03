function run() {
    var text = document.getElementById('sourceTA').value,
        target = document.getElementById('targetDiv'),
        html = converter.makeHtml(text);
    target.innerHTML = html;
}

var area = document.getElementById('sourceTA');
if (area.addEventListener) {
    area.addEventListener('input', function () {
        run();
    }, false);
} else if (area.attachEvent) {
    area.attachEvent('onpropertychange', function () {
        run();
    });
}

var converter = new showdown.Converter();
converter.setFlavor('github');
converter.setOption('underline', true);
converter.setOption('parseImgDimensions', true);
converter.setOption('simplifiedAutoLink', true);
converter.setOption('tablesHeaderId', true);
converter.setOption('smartIndentationFix', true);
converter.setOption('disableForced4SpacesIndentedSublists', true);
converter.setOption('simpleLineBreaks', true);
converter.setOption('requireSpaceBeforeHeadingText', true);
converter.setOption('openLinksInNewWindow', true);
converter.setOption('splitAdjacentBlockquotes', true);
run();