console.log("test")
const classRoster = [
    {
        name: "Ezra Belgrave"
    }, 
    {
        name: "Suzy"
    },
    {
        name: "Jon"
    },
    {
        name: "Bert"
    },
    {
        name: "Jess"
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