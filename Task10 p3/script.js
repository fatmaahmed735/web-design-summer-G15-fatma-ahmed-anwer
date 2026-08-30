var courses = ["HTML", "CSS", "JavaScript", "Bootstrap"];

var courseName = prompt("Enter course name");

var found = false;

for (var i = 0; i < courses.length; i++) {

    if (courses[i] == courseName) {
        found = true;
        break;
    }
}

if (found == true) {
    console.log("Found");
} else {
    courses.push(courseName);
    console.log("Course added");
}

console.log(courses);
