window.onload = function() {
    document.getElementById("share-song").addEventListener("click", function() {
        var tabSelector = { active: true, currentWindow: true };
        chrome.tabs.query(tabSelector, function(tabs) {
            var request = {
                getTitle: true,
                getArtist: true
            }
            chrome.tabs.sendMessage(tabs[0].id, request, function(response) {
                alert(response.title);
                alert(response.artist);
            });
        });
    });
};
