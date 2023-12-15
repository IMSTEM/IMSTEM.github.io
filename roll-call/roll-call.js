console.log("test")
const classRoster = [
    {
        name: "Ms. Bree",
        url: "../bree/bree.html"

    },
    {
        name: "Ms. Ezra",
        url: "../ezra/ezra.html"

    }, 

    {
        name: "Ms. Kiersten",
        url: "../kiersten/kiersten.html"

    },

    {
        name: "Ms. Marianne",
        url: "../marianne/marianne.html"

    },

    {
        name: "Ariel",
        url: "../ariel/ariel.html"

    },

    {
        name: "Cam",
        url: "../cam/cam.html"

    },

    {
        name: "Chloe",
        url: "../chloe/chloe.html"

    },

    {
        name: "Davina",
        url: "../davina/davina.html"

    },

    {
        name: "Dylan",
        url: "../dylan/dylan.html"

    },

    {
        name: "Haylee",
        url: "../haylee/haylee.html"

    },

    {
        name: "Imani",
        url: "../imani/imani.html"
    },

    {
        name: "Jalin",
        url: "../jalin/jalin.html"
    },

    {
        name: "Janiyah",
        url: "../janiyah/janiyah.html"
    },

    {
        name: "Joshua",
        url: "../joshua/joshua.html"
    },

    {
        name: "Justin",
        url: "../justin/justin.html"
    },

    {
        name: "Kaci",
        url: "../kaci/kaci.html"
    },

    {
        name: "Lois",
        url: "../lois/lois.html"
    },

    {
        name: "Miyah",
        url: "../miyah/miyah.html"

    },

    {
        name: "Morgan",
        url: "../morgan/morgan.html"
        
        
    },
    
    {
        name: "Mya",
        url: "../mya/mya.html"
        
        
    },

    {
        name: "Zareia",
        url: "../zareia/zareia.html"
        
        
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
    wrapper.classList.remove('fade-out');
    }, 500); // Adjust the delay to match the transition duration in CSS
}

logo.addEventListener('click', function() {
    console.log("hit")
    window.location.href = "/../index.html";
});