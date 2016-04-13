window.onload = function() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        var response = {};
        if (request.getTitle) {
            response.title = "Yeah! (feat. Lil Jon & Ludacris)";
        }
        if (request.getArtist) {
            response.artist = "Usher";
        }
        sendResponse(response);
    });
}
