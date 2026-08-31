let courses = ["HTML", "CSS", "JavaScript"];

let newCourse = "HTML";

let index = courses.findIndex(function(course) {
    return course === newCourse;
});

if (index !== -1) {
    alert("Course already exists");
} else {
    courses.push(newCourse);
    alert("Course added successfully");
}

console.log(courses);
