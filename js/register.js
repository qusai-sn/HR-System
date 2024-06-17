document.getElementById('register-button').addEventListener('click', function(event) {
   
   
   
    event.preventDefault(); // Prevent form from submitting normally
    console.log("button clicked ");
    // Capture form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const userName = document.getElementById('user-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
     
    // Retrieve existing local storage data
    let localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
    
    if (!localStorageData) {
      // Initialize localStorageData if it doesn't exist
      localStorageData = {
        userData: {
          users: [],
          loggedInUser: null
        },
        appData: {
          tasks: [],
          employees: [],
          leaveApplications: [],
          contactMessages: []
        },
        profiles: {}
      };
    }
  
    // Create new user object
    const newUser = {
      id: localStorageData.userData.users.length + 1, // Generate a new ID
      username: userName,
      password: password, // Ideally, hash the password before storing
      firstName: firstName,
      lastName: lastName,
      email: email
    };
  
    // Add new user to users array
    localStorageData.userData.users.push(newUser);
  
    // Update local storage
    localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
  
    // Optionally, you can log the data to verify
    console.log(localStorageData);
    
    // Clear the form
    // event.target.reset();
  });
  