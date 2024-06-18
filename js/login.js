document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form from submitting normally
      console.log("Login form submitted");
  
      // Capture form data
      const userName = document.getElementById('user-name').value;
      const password = document.getElementById('password').value;
  
      // Clear any previous error messages
      document.getElementById('usernameError').textContent = '';
      document.getElementById('passwordError').textContent = '';
  
      // Retrieve existing local storage data
      let localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
      
      if (!localStorageData || !localStorageData.userData || !localStorageData.userData.users) {
        alert("No users registered. Please register first.");
        return;
      }
  
      // Find the user with the provided username
      const user = localStorageData.userData.users.find(u => u.username === userName);
  
      if (!user) {
        document.getElementById('usernameError').textContent = 'Username not found.';
        return;
      }
  
      // Check if the password matches
      if (user.password !== password) {
        document.getElementById('passwordError').textContent = 'Incorrect password.';
        return;
      }
  
      // Login successful
      alert("Login successful!");
      console.log("Logged in user:", user);
  
      // Optionally, set the logged-in user in local storage
      localStorageData.userData.loggedInUser = user.id;
      localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
  
      // Redirect or perform any other actions after successful login
      // window.location.href = 'dashboard.html'; // Example redirect
    });
  });
  