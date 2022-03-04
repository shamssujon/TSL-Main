("use strict");

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", function () {
    searchInput.classList.toggle("open");
    setTimeout(function () {
        searchInput.focus();
    }, 50);

    window.addEventListener("mouseup", function (e) {
        if (e.target != searchInput) {
            searchInput.classList.remove("open");
        }
    });
    
    window.onkeyup = function (e) {
        if (e.keyCode == 27) {
            searchInput.classList.remove("open");
        }
    };
});


