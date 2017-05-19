var elements = document.querySelectorAll('.stars-container');
for (var i = 0; i < elements.length; i++) {
    var appUrl = elements[i].querySelector("a").href;
    retrieveInstallNum(appUrl, elements[i]);
}

function retrieveInstallNum(url, element){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            console.log(666);
            callback(request.responseText, element);
        }
    };
}

function callback(resp, element){
    var index = resp.search('numDownloads');
    console.log(resp.slice(index+16, index+25));
    var endFlag = resp.slice(index+16).search('div');
    console.log(endFlag);
    element.outerHTML = resp.slice(index+16, index+endFlag+12);
}