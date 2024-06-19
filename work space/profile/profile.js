
//get element from HTML fil 
const profileName = document.getElementById('profile-name');
const profilePosition = document.getElementById('profile-position');
const profilePicture = document.getElementById('profile-picture');
const profileEmail = document.getElementById('profile-email');
const profilePhone = document.getElementById('profile-phone');
const profileLocation = document.getElementById('profile-location');

// console.log(profileName);

// Function to load JSON file and store it in localStorage
async function getData() {
    const response = await fetch('user-info.json');
    const jsonData = await response.json();
    localStorage.setItem('profileData', JSON.stringify(jsonData));
    // console.log('JSON data loaded into localStorage');
}

// Function to get data from localStorage and use it
function getProfileData() {
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    console.log(profileData);
    profileName.innerText = profileData.name;
    profilePosition.innerText = profileData.position;
    profilePhone.innerText = profileData.phone;
    profileEmail.innerText = profileData.email;
    profileLocation.innerText = profileData.location;
    profilePicture.src = profileData.image;
}
getData();
onload = getProfileData();