
function generatePassword() {
    var name = document.getElementById("password-name").value;
    var password = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&_";
    characters.length = 15;
    for (var i = 0; i < 20; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(name + ": " + password));
    document.getElementById("password-list").appendChild(li);
}

// Save password list to local storage
window.addEventListener("beforeunload", function() {
    localStorage.setItem("passwordList", document.getElementById("password-list").innerHTML);
});

// Load password list from local storage
window.addEventListener("load", function() {
    var passwordList = localStorage.getItem("passwordList");
    if (passwordList) {
        document.getElementById("password-list").innerHTML = passwordList;
    }
});