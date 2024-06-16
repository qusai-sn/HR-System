// Load profile data from localStorage into form
function loadProfileData() {
    const profileData = JSON.parse(localStorage.getItem('profiles'));
    // if (profileData) {
        document.getElementById('name').value = profileData.name;
        document.getElementById('role').value = profileData.position;
        document.getElementById('email').value = profileData.email;
        document.getElementById('phone').value = profileData.phone;
        document.getElementById('location').value = profileData.location;
        console.log(profileData);
    // }
}

 // Save profile data to localStorage from form
function saveProfileData() {
    // event.preventDefault();
    const profileData = {
        name: document.getElementById('name').value,
        position: document.getElementById('role').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
    // window.location.href = 'profile.html';
    console.log(profileData);

}

// Load profile data when the page loads
window.onload = loadProfileData;

// Attach event listener to form submit
document.getElementById('Update-profile-save-changes').addEventListener('submit', saveProfileData);

