function loader(){
    document.getElementById("main-content").style.display = "none";
    setTimeout(() => hideLoader(), 5000)
}

function hideLoader(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

loader();