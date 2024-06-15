document.addEventListener("DOMContentLoaded", function() {
    const feedbacks = [
        { name: "Mike Johnson", email: "mikejohnson@example.com", feedback: "The team was very helpful and responsive." },
        { name: "Sarah Smith", email: "sarahsmith@example.com", feedback: "Excellent service, highly recommended." },
        { name: "John Doe", email: "johndoe@example.com", feedback: "Efficient and professional. Will use again." },
        { name: "Jane Doe", email: "janedoe@example.com", feedback: "Very pleased with the outcome. Great job!" },
        { name: "Chris Brown", email: "chrisbrown@example.com", feedback: "Outstanding support. Thank you!" },
        { name: "Emily Davis", email: "emilydavis@example.com", feedback: "Prompt response and great assistance." },
        { name: "David Lee", email: "davidlee@example.com", feedback: "Impressed with the service quality." },
        { name: "Emma Wilson", email: "emmawilson@example.com", feedback: "Highly professional and efficient." },
        { name: "Mike Johnson", email: "mikejohnson@example.com", feedback: "The team was very helpful and responsive." },

        ];

// Function to create feedback cards dynamically
function createFeedbackCards(cardsContainerId, feedbackData) {
const cardsContainer = document.getElementById(cardsContainerId);
cardsContainer.innerHTML = ""; // Clear existing content

feedbackData.forEach((feedback, index) => {
if (index < 3) { // Display only top 3 in the first carousel item
    cardsContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title">${feedback.name}</h4>
                   <h5 class="card-title">${feedback.email}</h5>

                    <p class="card-text">${feedback.feedback}</p>
                </div>
            </div>
        </div>
    `;
} else if (index >= 3 && index < 6) { // Display next 3 in the second carousel item
    cardsContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title">${feedback.name}</h4>
                    <h5 class="card-title">${feedback.email}</h5>

                    <p class="card-text">${feedback.feedback}</p>
                </div>
            </div>
        </div>
    `;
}
});
}

// Call the function to create cards for both carousel items
createFeedbackCards('feedback-cards-top', feedbacks);
createFeedbackCards('feedback-cards-bottom', feedbacks.slice(3)); // Passing remaining feedbacks

});