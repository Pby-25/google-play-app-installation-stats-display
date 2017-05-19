// const RATING_CLASS = 'reason-set';
// const INSTALL_QUERY = '[itemprop="numDownloads"]';

retrieveInstallsNum();

function retrieveInstallsNum() {
    var elements = document.querySelectorAll('.stars-container');
    for (var i = 0; i < elements.length; i++) {
        console.log(i);
        var appUrl = elements[i].querySelector("a").href;
        elements[i].outerHTML = appUrl;
    }
}