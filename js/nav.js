document.addEventListener("DOMContentLoaded", function() {
    generateNavbar();
    displayLoggedInUser();
  });
  
  function generateNavbar() {
    const navbarHTML = `
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
      <div class="container">
          <a class="navbar-brand" href="home.html">
              <h1 class="text-primary fw-bold mb-0">H<span class="text-dark Text-r">R</span></h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fa fa-bars text-primary"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mx-auto">
                  <li class="nav-item"><a class="nav-link active Active-item" href="home.html">Home</a></li>
                  <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                  <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                  <li class="nav-item"><a class="nav-link" href="profile.html">Profile</a></li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Services
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="leaveApplication.html">Leave Application</a></li>
                          <li><a class="dropdown-item" href="employees-information.html">View Employees Information</a></li>
                          <li><a class="dropdown-item" href="taskManagement.html">Task Management</a></li>
                          <li><a class="dropdown-item" href="feedback.html">Feedback System</a></li>
                      </ul>
                  </li>
              </ul>
              <div class="d-flex">
                  <button class="btn btn-toggle Mode" onclick="toggleDarkMode()">
                      <i class="fas fa-sun SunAndMoon"></i>
                      <span class="toggle-text">Mode</span> 
                      <i class="fas fa-moon SunAndMoon"></i>
                  </button>
                  <div class="user-info" id="user-info">
                   <a id="profile-button" href="../pages/profile.html"> </a>
                      <!-- User info will be injected here -->
                  </div> 
              </div>
          </div>
      </div>
  </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  }
  
  function getLoggedInUser() {
    let sessionData = JSON.parse(sessionStorage.getItem('logged-in-user'));
  
    if (!sessionData) {
      return null;
    }
  
    const user = sessionData.username;
  
    return user;
  }
  
  function displayLoggedInUser() {
    const user = getLoggedInUser();
  
    if (user) {
      const userInfoContainer = document.getElementById('profile-button');
      userInfoContainer.innerHTML = `<i class="fas fa-user"></i> <span>${user}</span>`;
    }
  }
  
  function toggleDarkMode() {
    
  }
  



































// document.addEventListener("DOMContentLoaded", function() {
//   generateNavbar();
// });

// function generateNavbar() {
//   const navbarHTML = `
   
// <!-- Navbar -->
// <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
//     <div class="container">
//         <a class="navbar-brand" href="home.html">
//             <h1 class="text-success fw-bold mb-0">H<span class="text-dark Text-r">R</span></h1>
//         </a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="fa fa-bars text-success"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarCollapse">
//             <ul class="navbar-nav mx-auto">
//                 <li class="nav-item"><a class="nav-link active Active-item" href="home.html">Home</a></li>
//                 <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
//                 <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
//                 <li class="nav-item"><a class="nav-link" href="profile.html">Profile</a></li>
//                 <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Services
//                     </a>
//                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a class="dropdown-item" href="leaveApplication.html">Leave Application</a></li>
//                         <li><a class="dropdown-item" href="employees-information.html">View Employees Information</a></li>
//                         <li><a class="dropdown-item" href="taskManagement.html">Task Management</a></li>
//                         <li><a class="dropdown-item" href="feedback.html">Feedback System</a></li>
//                     </ul>
//                 </li>
//             </ul>
//             <div class="d-flex">
                
//                 <button class="btn btn-toggle Mode" onclick="toggleDarkMode()">
//                     <i class="fas fa-sun SunAndMoon"></i>
//                     <span class="toggle-text">Mode</span> 
//                     <i class="fas fa-moon SunAndMoon"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
// </nav>

//   `;

//   document.body.insertAdjacentHTML('afterbegin', navbarHTML);
// }


// dark mode nav : 

// <!-- Navbar -->
// <nav class="navbar navbar-expand-lg">
//     <div class="container">
//         <a class="navbar-brand" href="index.html">
//             <h1 class="text-success fw-bold mb-0">H<span class="text-dark Text-r">R</span></h1>
//         </a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="fa fa-bars text-success"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarCollapse">
//             <ul class="navbar-nav mx-auto">
//                 <li class="nav-item"><a class="nav-link active Active-item" href="index.html">Home</a></li>
//                 <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
//                 <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
//                 <li class="nav-item"><a class="nav-link" href="profile.html">Profile</a></li>
//                 <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Services
//                     </a>
//                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a class="dropdown-item" href="leave-application.html">Leave Application</a></li>
//                         <li><a class="dropdown-item" href="view-employees.html">View Employees Information</a></li>
//                         <li><a class="dropdown-item" href="company-policies.html">Company Policies</a></li>
//                         <li><a class="dropdown-item" href="task-management.html">Task Management</a></li>
//                         <li><a class="dropdown-item" href="feedback.html">Feedback System</a></li>
//                     </ul>
//                 </li>
//             </ul>
//             <div class="d-flex">
//                 <a href="#" class="btn btn-success py-2 px-4 rounded-pill me-2">Login</a>
//                 <a href="#" class="btn btn-success py-2 px-4 rounded-pill">Register</a>
//                 <button class="btn btn-toggle Mode" onclick="toggleDarkMode()">
//                     <i class="fas fa-sun SunAndMoon"></i>
//                     <span class="toggle-text">Mode</span> 
//                     <i class="fas fa-moon SunAndMoon"></i>
//                 </button>
//             </div>
//         </div>
//     </div>
// </nav>