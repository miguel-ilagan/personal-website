var nameNode = document.getElementById("name");
nameNode.addEventListener("click", function() {
    alert("Welcome to my homepage!")
})

let courses = document.querySelectorAll(".course");
for (let i = 0; i < courses.length; i++) {
    courses[i].addEventListener('click', function() {
        alert("Mandatory Course for Master of IT")
    });
}