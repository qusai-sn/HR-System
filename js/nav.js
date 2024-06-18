document.addEventListener("DOMContentLoaded", function() {
  generateNavbar();
});

function generateNavbar() {
  const navbarHTML = `
   
    <!-- Navbar start -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <h1 class="text-success fw-bold mb-0 logo-h1">H<span class="text-dark Text-r">R</span></h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars text-success"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link active Active-item" href="index.html">Home</a></li>
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
                    <a href="#" class="btn btn-success py-2 px-4 rounded-pill me-2">Login</a>
                    <a href="#" class="btn btn-success py-2 px-4 rounded-pill">Register</a>
                    <button class="btn btn-toggle Mode" onclick="toggleDarkMode()">
                        <i class="fas fa-sun"></i>
                        <span class="toggle-text">Mode</span> 
                        <i class="fas fa-moon"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->
  `;

  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}
