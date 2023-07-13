console.log("test")
const classRoster = [
    {
        name: "Ezra Belgrave",
        url: "ezra/ezra.html"

    }, 
    {
        name: "Morgan",
        url: "../morgan/morgan.html"
        
        
    },
    {
        name: "Joshua",
        url: "../joushua/joshua.html"
    },
    {
        name: "Jalin",
        url: "../jalin/jalin.html"
    },
    {
        name: "Imani",
        url: "../imani/imani.html"
    },
    {
        name: "Allan"
    },
    {
        name: "Taylor"
    },
    {
        name: "Jeff"
    },
    {
        name: "Sergio"
    },
    {
        name: "Daphne"
    },
    {
        name: "Eugene"
    },
    {
        name: "Bartholomew"
    },
    {
        name: "Cynthia"
    },
    {
        name: "Gertrude"
    },
    {
        name: "Favi"
    },
    {
        name: "Oluwatobi"
    },
]


const holder = document.querySelector("#holder");

classRoster.forEach(function(student, i) {
    const student_holder = document.createElement('div');
    student_holder.classList.add("student-card");
    student_holder.textContent = student.name;

    

    student_holder.addEventListener('click',function() {
        navigateToPage(student.url);
    
});

holder.appendChild(student_holder);
}); 

function navigateToPage(url) {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.add('fade-out');

    setTimeout(() => {
    window.location.href = url;
    }, 500); // Adjust the delay to match the transition duration in CSS
}

logo.addEventListener('click', function() {
    console.log("hit")
    window.location.href = "/../index.html";
});