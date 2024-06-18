document.addEventListener("DOMContentLoaded", function() {
    let storedData = localStorage.getItem("contactMessages"); // Corrected the key name
    console.log(storedData);
    let feedbacks = [];
 
    // Check if there is stored data
    if (storedData) {
        // Parse stored JSON string to array
        feedbacks = JSON.parse(storedData);
    }
  
    // Function to create feedback cards dynamically
    function createFeedbackCards(cardsContainerId, feedbackData) {
        const cardsContainer = document.getElementById(cardsContainerId);
        cardsContainer.innerHTML = ""; // Clear existing content
  
        feedbackData.forEach((feedback, index) => {
            // Display each feedback object
            if (index < 3) {
                cardsContainer.innerHTML += `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${feedback.firstName}</h4>
                                <h5 class="card-title">${feedback.lastName}</h5>
                                <p class="card-text">${feedback.email}</p>
                                <p class="card-text">${feedback.message}</p>
                                 <p class="card-text">${feedback.timestamp}</p>
                            </div>
                        </div>
                    </div>
                `;
            } else if (index >= 3 && index < 6) {
                cardsContainer.innerHTML += `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${feedback.firstName}</h4>
                                <h5 class="card-title">${feedback.lastName}</h5>
                                <p class="card-text">${feedback.email}</p>
                                <p class="card-text">${feedback.message}</p>
                                <p class="card-text">${feedback.timestamp}</p>
  
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    }
  
    // Call the function to create cards for both carousel items
    createFeedbackCards('feedback-cards-top', feedbacks.slice(0, 3)); // Display top 3 feedbacks
    createFeedbackCards('feedback-cards-bottom', feedbacks.slice(3, 6)); // Display next 3 feedbacks
  });
















  
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