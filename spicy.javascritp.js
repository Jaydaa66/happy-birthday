const scenes = document.querySelectorAll(".scene");

document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    const index = Number(btn.dataset.target);
    scenes[index].scrollIntoView({behavior:"smooth"});
  });
});

// Subtle scrapbook movement with the pointer.
document.querySelectorAll(".four-cards article, .calendar-sheet, .flower-card").forEach(el => {
  el.addEventListener("mousemove", e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5;
    const y = (e.clientY-r.top)/r.height-.5;
    el.style.transform = `perspective(700px) rotateX(${y*-3}deg) rotateY(${x*4}deg) translateY(-4px)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
  });
});
function openMemory(type) {

    const popup = document.getElementById("memoryPopup");

    const contents = document.querySelectorAll(".popup-content");

    contents.forEach(function(content) {
        content.classList.remove("active");
    });

    const selected = document.getElementById(type + "Content");

    if (selected) {
        selected.classList.add("active");
    }

    popup.style.display = "flex";
}


function closeMemory() {

    const popup = document.getElementById("memoryPopup");

    popup.style.display = "none";

}


/* close when clicking outside the box */

document.getElementById("memoryPopup").addEventListener("click", function(event) {

    if (event.target === this) {
        closeMemory();
    }

});