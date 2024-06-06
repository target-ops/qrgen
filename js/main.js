const generatorTab = document.querySelector(".nav-gene");

generatorTab.addEventListener("click", () => {
    generatorTab.classList.add("active");
    scannerTab.classList.remove("active");

    document.querySelector(".generator").style.display = "block";
});

scannerTab.addEventListener("click", () => {
    scannerTab.classList.add("active");
    generatorTab.classList.remove("active");

    document.querySelector(".generator").style.display = "none";
})