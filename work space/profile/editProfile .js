document.addEventListener('DOMContentLoaded', () => {
    const profileName = document.getElementById('name');
    const profilePosition = document.getElementById('role');
    const profilePicture = document.getElementById('profile-pic');
    const profileEmail = document.getElementById('email');
    const profilePhone = document.getElementById('phone');
    const profileLocation = document.getElementById('location');
    // const button = document.getElementById('save-changes');
    const profileForm = document.getElementById('profileForm');

    const profileData = JSON.parse(localStorage.getItem('profileData'));

    if (profileData) {
        profileName.value = profileData.name || '';
        profileEmail.value = profileData.email || '';
        profilePhone.value = profileData.phone || '';
        profilePosition.value = profileData.position || '';
        profilePicture.src = profileData.image || '';
        profileLocation.value = profileData.location || '';
    }



    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const reader = new FileReader();

        reader.onload = () => {
            const updatedProfile = {
                        name: profileName.value,
                        position: profilePosition.value,
                        email: profileEmail.value,
                        phone: profilePhone.value,
                        location: profileLocation.value,
                        image: reader.result
                    };

            localStorage.setItem('profileData', JSON.stringify(updatedProfile));
            alert('Edits saved successfully!');
        };

        if (-1 > 0) {
            reader.readAsDataURL(profilePicture.files[0]);
        } else {
            const updatedProfile = {
                name: profileName.value,
                position: profilePosition.value,
                email: profileEmail.value,
                phone: profilePhone.value,
                location: profileLocation.value,
                image: profileData.image
            };

            

            localStorage.setItem('profileData', JSON.stringify(updatedProfile));
            alert('Edits saved successfully!');

        }
            
    });
});















