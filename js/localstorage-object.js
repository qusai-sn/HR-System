  // Define the localStorageData object
  let localStorageData = {
    userData: {
        users: [
            {
                id: 1,
                username: "john_doe",
                password: "hashedPassword1",
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com"
            },
            {
                id: 2,
                username: "jane_smith",
                password: "hashedPassword2",
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com"
            }
            // Add more users as needed
        ],
        loggedInUser: null // To track the currently logged-in user
    },
    appData: {
        tasks: [
            {
                taskId: 1,
                taskTitle: "Task 1",
                taskDescription: "Description of Task 1",
                dueDate: "2024-06-30",
                assignedTo: "employeeId1"
            },
            {
                taskId: 2,
                taskTitle: "Task 2",
                taskDescription: "Description of Task 2",
                dueDate: "2024-07-05",
                assignedTo: "employeeId2"
            }
            // Add more tasks as needed
        ],
        employees: [
            {
                employeeId: "employeeId1",
                name: "Employee 1",
                department: "Department A"
            },
            {
                employeeId: "employeeId2",
                name: "Employee 2",
                department: "Department B"
            }
            // Add more employees as needed
        ],
        leaveApplications: [
            {
                applicationId: 1,
                employeeId: "employeeId1",
                leaveType: "Casual Leave",
                fromDate: "2024-07-01",
                toDate: "2024-07-02",
                reason: "Family vacation",
                leaveDuration: "Full Day"
            }
            // Add more leave applications as needed
        ],

        // Function to submit form data
        // submitForm: function(firstName, lastName, email, message) {
        //     // Create object for the current form submission
        //     let contactMessage = {
        //         firstName: firstName,
        //         lastName: lastName,
        //         email: email,
        //         message: message,
        //         timestamp: new Date().toISOString() // Example timestamp
        //     };

        //     // Retrieve existing data from localStorage or initialize an empty array
        //     let existingData = JSON.parse(localStorage.getItem("contactMessages")) || [];

        //     // Add the new form data to the existing array
        //     existingData.push(contactMessage);

        //     // Store the updated array back in localStorage
        //     localStorage.setItem("contactMessages", JSON.stringify(existingData));

        //     // Optionally, log the form data to console
        //     console.log("contactMessage:", contactMessage);

        //     // Clear the form fields after storing data
        //     document.getElementById("first-name").value = "";
        //     document.getElementById("last-name").value = "";
        //     document.getElementById("email").value = "";
        //     document.getElementById("message").value = "";

        //     alert("Form submitted successfully!");
        // }
    }
};

// Store initial data in local storage
localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
















// Function to toggle dark mode
// function toggleDarkMode() {
//     let body = document.body;
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         localStorage.setItem('darkMode', true);
//     } else {
//         localStorage.removeItem('darkMode');
//     }
// }

// window.onload = function() {
//     let isDarkMode = localStorage.getItem('darkMode');
//     if (isDarkMode === 'true') {
//         document.body.classList.add('dark-mode');
//     }
// };

// // Event listener for form submission
// document.getElementById('contact-button').addEventListener('click', function() {
//     // Collect form data
//     let firstName = document.getElementById("first-name").value.trim();
//     let lastName = document.getElementById("last-name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let message = document.getElementById("message").value.trim();

//     // Regular expressions for validation
//     let nameRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces  \s → Whitespace character
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

//     // Validation functions
//     function validateFirstName() {
//         if (firstName === "") {
//             alert("Please enter your First Name.");
//             return false;
//         }
//         if (!nameRegex.test(firstName)) {
//             alert("First Name should only contain letters and spaces.");
//             return false;
//         }
//         return true;
//     }

//     function validateLastName() {
//         if (lastName === "") {
//             alert("Please enter your Last Name.");
//             return false;
//         }
//         if (!nameRegex.test(lastName)) {
//             alert("Last Name should only contain letters and spaces.");
//             return false;
//         }
//         return true;
//     }

//     function validateEmail() {
//         if (email === "") {
//             alert("Please enter your email.");
//             return false;
//         }
//         if (!emailRegex.test(email)) {
//             alert("Please enter a valid email address.");
//             return false;
//         }
//         return true;
//     }

//     function validateMessage() {
//         if (message === "") {
//             alert("Please enter your message.");
//             return false;
//         }
//         return true;
//     }

//     // Perform validation
//     if (validateFirstName() && validateLastName() && validateEmail() && validateMessage()) {
//         // Call the submitForm function from localStorageData
//         localStorageData.appData.submitForm(firstName, lastName, email, message);
//     }
// });





     
