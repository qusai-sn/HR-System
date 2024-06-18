function fetchEmployeesFromLocalStorage() {
    // Retrieve employees data from localStorage
    const employeesData = JSON.parse(localStorage.getItem('employees'));

    if (employeesData && employeesData.length > 0) {
        return employeesData;
    } else {
        console.error('No employee data found in localStorage.');
        return []; // Return an empty array if no data found
    }
}

function createEmployeeCard(employee) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = employee.image;
    img.alt = employee.name;

    const name = document.createElement('h2');
    name.textContent = employee.name;

    const jobTitle = document.createElement('p');
    jobTitle.textContent = `Job Title: ${employee.jobTitle}`;

    const salary = document.createElement('p');
    salary.textContent = `Salary: $${employee.salary}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(jobTitle);
    card.appendChild(salary);

    return card;
}

async function displayEmployees() {
    const employees = fetchEmployeesFromLocalStorage();
    const employeeCardsContainer = document.getElementById('employee-cards');

    // Clear existing content in the container
    employeeCardsContainer.innerHTML = '';

    employees.forEach(employee => {
        const card = createEmployeeCard(employee);
        employeeCardsContainer.appendChild(card);
    });
}

// Call displayEmployees to initiate fetching and displaying employee data
displayEmployees();