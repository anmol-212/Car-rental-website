// JavaScript for button functionality
function changeContent(imageUrl, tableContent, buttonId) {
    document.getElementById('image').innerHTML = '<img src="' + imageUrl + '">';
    document.getElementById('table').innerHTML = tableContent;
    document.getElementById('table').className = buttonId;

    // Remove the 'clicked' class from all buttons
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('clicked');
    }

    // Add the 'clicked' class to the clicked button
    var clickedButton = document.getElementById(buttonId);
    clickedButton.classList.add('clicked');
}
// Function to toggle the visibility of the dropdown content
function toggleDropdown(contentId) {
    var dropdown = document.getElementById(contentId);

    // Get all dropdown contents
    var dropdownContents = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdownContents.length; i++) {
        // Close all dropdowns except the one with the provided contentId
        if (dropdownContents[i].getAttribute("id") !== contentId) {
            dropdownContents[i].style.display = "none";
        }
    }

    // Toggle the visibility of the clicked dropdown
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Open the first dropdown by default
document.getElementById("dropdownContent1").style.display = "block";
// Function to scroll to the top of the page smoothly
function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Show/hide the "Top" button based on the scroll position
window.onscroll = function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};