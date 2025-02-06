//admin login script start//

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        console.log("Username: ", username);
        console.log("Password: ", password);

        if (username === 'admin' && password === 'admin') {
            console.log("Redirecting to adminpanel.html...");
            window.location.href = 'AdminPanel_Page/adminpanel.html'; // Corrected path
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});

//admin login script end //
