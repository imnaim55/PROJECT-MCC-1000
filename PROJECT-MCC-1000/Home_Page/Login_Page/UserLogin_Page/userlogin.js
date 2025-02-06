// user login script start //

document.addEventListener('DOMContentLoaded', function () {
    const profilePictureInput = document.getElementById('profilePictureInput');
    const profilePicture = document.getElementById('profilePicture');
    const mobileVerifyBtn = document.getElementById('mobileVerifyBtn');
    const emailVerifyBtn = document.getElementById('emailVerifyBtn');
    const verificationSection = document.getElementById('verificationSection');

    profilePicture.addEventListener('click', function () {
        profilePictureInput.click();
    });

    profilePictureInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    mobileVerifyBtn.addEventListener('click', function () {
        alert("Mobile verification code sent!");
        verificationSection.style.display = 'block';
    });

    emailVerifyBtn.addEventListener('click', function () {
        alert("Email verification code sent!");
        verificationSection.style.display = 'block';
    });

    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Registration Successful!");
    });
});

// user login script end //