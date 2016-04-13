function shareSong() {
    alert("the href is " + document.location.href);
    console.log("The tweeted text would be: " + tweetText);
}

window.onload = function() {
    document.getElementById("share-song").addEventListener("click", shareSong);
};
