let users = [
    {
        name: "fatma",
        email: "fatma@gmail.com"
    },
    {
        name: "Marwa",
        email: "Marwa@gmail.com"
    }
];

localStorage.setItem("users", JSON.stringify(users));


let usersList = JSON.parse(localStorage.getItem("users"));

let container = document.getElementById("users");

usersList.forEach(function(user) {

    let div = document.createElement("div");

    div.className = "col-md-4";

    div.innerHTML = `
        <div class="card p-3">
            <h4>${user.name}</h4>
            <p class="mb-0">${user.email}</p>
        </div>
    `;

    container.appendChild(div);
});
