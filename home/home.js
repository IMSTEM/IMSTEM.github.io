function navigateToPage(url) {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.add('fade-out');

    setTimeout(() => {
    window.location.href = url;
    wrapper.classList.remove('fade-out');
    }, 500); // Adjust the delay to match the transition duration in CSS
}

// handles fading in when going back to a page.
function pageLoaded() {
    // Example: Change the text of an element
    const wrapper = document.getElementById('wrapper');
    setTimeout(() => {
        if(wrapper.classList.contains("fade-out")){
            wrapper.classList.replace("fade-out", "fade-in");
        }
    }, 600); 
}

// Attach the function to the window.onload event
window.onload = pageLoaded;
