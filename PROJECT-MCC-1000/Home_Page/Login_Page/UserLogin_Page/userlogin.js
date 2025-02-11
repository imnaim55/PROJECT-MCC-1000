// user login script start //

document.addEventListener('DOMContentLoaded', function () {
    const profilePictureInput = document.getElementById('profilePictureInput');
    const profilePicture = document.getElementById('profilePicture');
    const mobileVerifyBtn = document.getElementById('mobileVerifyBtn');
    const emailVerifyBtn = document.getElementById('emailVerifyBtn');
    const verificationSection = document.getElementById('verificationSection');
    const registrationForm = document.getElementById('registrationForm');
    const responseMessage = document.getElementById('responseMessage');

    profilePicture.addEventListener('click', function () {
        profilePictureInput.click();
    });

    profilePictureInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            // Validate file type (e.g., only image files)
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!allowedTypes.includes(file.type)) {
                alert("Only JPEG, JPG, and PNG files are allowed.");
                return;
            }

            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    mobileVerifyBtn.addEventListener('click', function () {
        alert("Mobile verification code sent!");
        verificationSection.style.display = 'block'; // Show verification section
    });

    emailVerifyBtn.addEventListener('click', function () {
        alert("Email verification code sent!");
        verificationSection.style.display = 'block'; // Show verification section
    });

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Optional: Add further validation logic before submitting

        // Display success message temporarily (if set in the PHP redirect)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('success')) {
            responseMessage.textContent = urlParams.get('success');
        } else {
            responseMessage.textContent = ''; // Clear any previous messages
        }

        // Simulate form submission, can be enhanced with AJAX later if needed
        registrationForm.submit(); // You can use AJAX to submit the form without reloading the page
    });
});

// user login script end //
