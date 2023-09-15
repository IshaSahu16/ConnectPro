// -----------------toggle-menu-open-profile-page------------------
let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}

// -------------open-sidebar-activity-------------------
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity() {
    sideActivity.classList.toggle("open-activity");

    if (sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    }
    else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
}

// switching tabs in messaging page
document.addEventListener("DOMContentLoaded", function () {
    const focusedTab = document.querySelector(".focused");
    const otherTab = document.querySelector(".other");
    const focusedPanel = document.querySelector(".focused-panel");
    const otherPanel = document.querySelector(".other-panel");

    // Function to switch to the Focused tab
    focusedTab.addEventListener("click", function (e) {
        e.preventDefault();
        focusedTab.classList.add("focused");
        otherTab.classList.remove("focused");
        focusedPanel.style.display = "block";
        otherPanel.style.display = "none";
    });

    // Function to switch to the Other tab
    otherTab.addEventListener("click", function (e) {
        e.preventDefault();
        otherTab.classList.add("focused");
        focusedTab.classList.remove("focused");
        otherPanel.style.display = "block";
        focusedPanel.style.display = "none";
    });
});

// function to close the suggested job div
let suggestJobDiv = document.querySelector('.suggested-jobs');

function closeSuggestedJobs() {
    if (suggestJobDiv) {
        suggestJobDiv.style.display = 'none';
    }
}

// function to close the invite card on clicking ignore or accept
let inviteCard = document.querySelector('.invite-card');

function closeInviteCard() {
    if (inviteCard) {
        inviteCard.style.display = 'none';
    }
}