
$(document).ready(function () {
    $("ul").each(function () {
        const listItems = $(this).children("li").length;

        // Apply multi-column layout for large lists
        if (listItems > 6) {
            $(this).addClass("too-many-items");
        }

        // Check media sizes
        if (window.matchMedia("(max-width: 768px)").matches) {
            // For mobile or smaller screens
            if (listItems <= 5) {
                $(this).find("li").css("font-size", "11px");
            } else if (listItems <= 10) {
                $(this).find("li").css("font-size", "8px");
            } else {
                $(this).find("li").css("font-size", "9px");
            }
        } else {
            // For larger screens
            if (listItems <= 5) {
                $(this).find("li").css("font-size", "18px");
            } else if (listItems <= 10) {
                $(this).find("li").css("font-size", "13px");
            } else {
                $(this).find("li").css("font-size", "11px");
            }
        }
    });
});

// Preload and play immediately on user interaction to prevent delay
const sound = document.getElementById("btnSound");
const sound2 = document.getElementById("btnSound2");
// Play silent audio on first interaction to preload it
window.addEventListener(
    "click",
    () => {
        sound.volume = 0;
        sound
            .play()
            .then(() => {
                sound.pause();
                sound.currentTime = 0;
                sound.volume = 1; // Restore volume
            })
            .catch((err) => console.error("Audio preload failed:", err));
    },
    { once: true }
);

function playSound() {
    sound.currentTime = 0; // Reset to ensure it plays from the start
    sound.play();
}

function playSound2() {
    sound2.currentTime = 0; // Reset to ensure it plays from the start
    sound2.play();
}

function showBio(id, content) {
    // Hide all bio boxes
    const bios = document.querySelectorAll(".bio-box");
    bios.forEach((bio) => (bio.style.display = "none"));

    // Show the selected bio box
    const selectedBio = document.getElementById(id);
    if (selectedBio) {
        selectedBio.style.display = "block";
    }

    if (content == "bio") {
        document
            .querySelectorAll('[id^="bio-content"]')
            .forEach(function (el) {
                el.style.display = "none";
            });

        $("#bio-content-1").css("display", "block");
    } else if (content == "skill") {
        // // Hide all sections
        document.querySelectorAll('[id^="skills-"]').forEach(function (el) {
            el.style.display = "none";
        });

        $("#skills-1").css("display", "block");
    }

    // Play sound effect
    playSound();
}

function toggleContent(divId, content) {
    const div = document.getElementById(divId);
    const isVisible = div.style.display === "block";

    if (content == "bio") {
        // // Hide all sections
        document
            .querySelectorAll('[id^="bio-content"]')
            .forEach(function (el) {
                el.style.display = "none";
            });
    } else if (content == "skill") {
        // // Hide all sections
        document.querySelectorAll('[id^="skills-"]').forEach(function (el) {
            el.style.display = "none";
        });
    }

    // Toggle the clicked section
    if (!isVisible) {
        div.style.display = "block";
    }

    // Play second sound when the arrow is clicked
    playSound2();
}
