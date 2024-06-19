

 // Save profile data to localStorage from form
 function saveProfileData() {
    let sessionUser = JSON.parse(sessionStorage.getItem('logged-in-user'));

    let userData = {
        role: document.getElementById('role').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        about: document.getElementById('about').value,
        firstName: sessionUser.firstName,
        lastName: sessionUser.lastName,
        id: sessionUser.id,
        username: sessionUser.username
    };

    sessionStorage.setItem('logged-in-user', JSON.stringify(userData));
    updateLocalStorageUserData(userData);
    console.log(userData);

    // Redirect to profile page
    window.location.href = "../pages/profile.html";
}

function updateLocalStorageUserData(updatedUserData) {
    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    let userIndex = storedUserData.users.findIndex(user => user.username === updatedUserData.username);
    if (userIndex !== -1) {
        // Update the user's profile data
        storedUserData.users[userIndex].role = updatedUserData.role;
        storedUserData.users[userIndex].email = updatedUserData.email;
        storedUserData.users[userIndex].phone = updatedUserData.phone;
        storedUserData.users[userIndex].location = updatedUserData.location;
        storedUserData.users[userIndex].about = updatedUserData.about;

        localStorage.setItem('userData', JSON.stringify(storedUserData));
    }
}

// Attach event listener to update-profile button
document.getElementById('update-profile').addEventListener('click', saveProfileData);



