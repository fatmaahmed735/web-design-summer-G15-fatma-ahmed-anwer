document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    document.getElementById("result").innerHTML =
        "<p>User Name: " + username + "</p>" +
        "<p>Email: " + email + "</p>";
});
