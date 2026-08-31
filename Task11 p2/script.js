// Users Data

var userInfo = {
    name: "Ahmed",
    id: 6,
    balance: 5000
}

var userInfo2 = {
    name: "Mona",
    id: 7,
    balance: 3000
}

var userInfo3 = {
    name: "Ali",
    id: 8,
    balance: 7000
}


// Users List

var usersList = [userInfo, userInfo2, userInfo3]

console.log(usersList)


// 1- Add User

function addUser() {

    var name = prompt("Enter user name")
    var id = Number(prompt("Enter user id"))
    var balance = Number(prompt("Enter user balance"))

    var user = {
        name: name,
        id: id,
        balance: balance
    }

    if (usersList.findIndex((item) => item.id == id) != -1) {

        alert("ID already exists")

    } else {

        usersList.push(user)

        alert("User added successfully")
    }
}

addUser()

console.log(usersList)


// 2- Edit User Balance

function editUserBalanceById(id, newBalance) {

    var index = usersList.findIndex((item) => item.id == id)

    if (index != -1) {

        usersList[index].balance = newBalance

    } else {

        alert("User not found")
    }
}

var editId = Number(prompt("Enter user id"))
var newBalance = Number(prompt("Enter new balance"))

editUserBalanceById(editId, newBalance)

console.log(usersList)


// 3- Transfer Balance

function transferBalance(fromID, toID, balance) {

    var fromIndex = usersList.findIndex((item) => item.id == fromID)

    var toIndex = usersList.findIndex((item) => item.id == toID)

    if (fromIndex != -1 && toIndex != -1) {

        usersList[fromIndex].balance -= balance

        usersList[toIndex].balance += balance

    } else {

        alert("User not found")
    }
}

var fromID = Number(prompt("Enter sender id"))
var toID = Number(prompt("Enter receiver id"))
var transferAmount = Number(prompt("Enter balance"))

transferBalance(fromID, toID, transferAmount)

console.log(usersList)


// 4- Delete User

function deleteUserById(id) {

    var index = usersList.findIndex((item) => item.id == id)

    if (index != -1) {

        usersList.splice(index, 1)

    } else {

        alert("User not found")
    }
}

var deleteID = Number(prompt("Enter user id"))

deleteUserById(deleteID)

console.log(usersList)
