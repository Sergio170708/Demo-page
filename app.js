// select the loading page
let loading = document.querySelector(".loading-page")

window.addEventListener("load", fade)

function fade() {
    loading.classList.add("fade");
}