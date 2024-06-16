// This function is go for portfolio main home page

document.addEventListener("DOMContentLoaded", function() {
    var exploreBtn = document.getElementById("goHomePageBtn");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function(event) {
            console.log("Explore successful");
        });
    } else {
        console.error("Button with ID 'goHomePageBtn' not");
