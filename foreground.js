
// document.addEventListener("mousemove", () => {
//     try {
//         const overlay = document.getElementById("HardsellOverlay");
//         overlay.remove();
//         document.querySelector("body").style.overflow = "auto";
//     }
//     catch (e) {
//     }

// });

try {
    const overlay = document.getElementById("HardsellOverlay");
    overlay.remove();
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("html").style.overflow = "auto";
}
catch (e) {
}


