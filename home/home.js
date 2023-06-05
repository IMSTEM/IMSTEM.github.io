function navigateToPage(url) {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.add('fade-out');

    setTimeout(() => {
    window.location.href = url;
    }, 500); // Adjust the delay to match the transition duration in CSS
}

const logo = document.querySelector("#logo");

logo.addEventListener('click', function() {
    console.log("hit")
    window.location.href = "/";
});