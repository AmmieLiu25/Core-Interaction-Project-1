document.querySelector("#diamond6").addEventListener("click", function(event) {
    event.preventDefault(); // Stop default navigation

    const targetPage = this.querySelector("a").getAttribute("href"); 

    // Apply transition
    document.querySelector(".page-transition").classList.add("transition-active");

    // Wait for animation to finish before navigating
    setTimeout(() => {
        window.location.href = targetPage;
    }, 2500); // Matches animation duration
});

//this js sheet should be connected to all sub pages that include transition 