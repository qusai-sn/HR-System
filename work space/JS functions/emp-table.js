const employeesInfoAPI = 'https://666f2849f1e1da2be5222215.mockapi.io/date';

let employeeData = []; // Initialize an array to hold employee data

// Function to fetch data from API
async function fetchDataFromAPI() {
    try {
        const response = await fetch(employeesInfoAPI);
        const data = await response.json();
        employeeData = data; // Update global variable with fetched data
        localStorage.setItem("employees", JSON.stringify(employeeData)); // Store data in localStorage
        renderTable(employeeData); // Render table with fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render table with employee data
function renderTable(data) {
    const info = document.getElementById('information'); // Get table body element
    info.innerHTML = ''; // Clear previous table content

    data.forEach((employee, index) => {
        const maritalStatus = employee.maritalStatus ? 'married' : 'not in a relationship';
        const row = `<tr>
                        <td>${index + 1}</td>
                        <td>${employee.socialNumber}</td>
                        <td>${employee.name}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.address}</td>
                        <td>${maritalStatus}</td>
                        <td>${employee.DateOfEmployment}</td>
                        <td>${employee.email}</td>
                    </tr>`;
        info.innerHTML += row; // Append row to table body
    });
}

// Function to filter data based on search input
function filterData(value) {
    const filter = employeeData.filter(employee => {
        const name = employee.name.toLowerCase();
        const id = employee.socialNumber.toString(); // Convert to string for exact match

        return name.includes(value.toLowerCase()) || id.includes(value);
    });

    return filter;
}

// Function to handle search input events
function handleSearchInput(event) {
    const searchValue = event.target.value.trim(); // Trim to remove leading/trailing spaces
    const filteredData = filterData(searchValue);
    renderTable(filteredData);
}

// Function to handle column header click for sorting
function handleColumnHeaderClick(index) {
    const columnName = event.target.getAttribute('value');
    const sortIcon = event.target.querySelector('.sortIcon');
    
    if (event.target.classList.contains('desc')) {
        employeeData.sort((a, b) => a[columnName] > b[columnName] ? 1 : -1);
        event.target.classList.replace('desc', 'asc');
        sortIcon.innerHTML = '<i class="fa-solid fa-sort-up"></i>';
    } else if (event.target.classList.contains('asc')) {
        employeeData.reverse();
        event.target.classList.replace('asc', 'desc');
        sortIcon.innerHTML = '<i class="fa-solid fa-sort-down"></i>';
    }

    renderTable(employeeData);
}

// Event listeners
document.addEventListener('DOMContentLoaded', fetchDataFromAPI);
searchName.addEventListener('keyup', handleSearchInput);
searchID.addEventListener('keyup', handleSearchInput);

const columnHeaders = document.querySelectorAll("th");
columnHeaders.forEach((header, index) => {
    header.addEventListener('click', () => handleColumnHeaderClick(index));
});
