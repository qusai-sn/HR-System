document.addEventListener("DOMContentLoaded", function() {
  generateNavbar();
});

function generateNavbar() {
  const navbarHTML = `
   
   
    <div class="container-fluid nav-bar">
        <div class="container">
            <nav class="navbar navbar-light navbar-expand-lg py-4">
                <a href="index.html" class="navbar-brand">
                    <h1 class="text-primary fw-bold mb-0">H<span class="text-dark">R</span> </h1>
                </a>
                <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars text-primary"></span>
                </button>
                <div class="collapse navbar-collapse" style="align-items: center;" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="contact.html" class="nav-item nav-link">contact us</a>
                        <a href="Profile.html" class="nav-item nav-link">Profile</a>
                       
                        <div class="nav-item dropdown">
                            <a href="services" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                            <div class="dropdown-menu bg-light">
                                <a href="leave-application.html" class="dropdown-item">	Leave Application </a>
                                <a href="view-employees.html" class="dropdown-item">View employees information</a>
                                <a href="company-policies.html" class="dropdown-item">Company Policies</a>
                                <a href="task-managment.html" class="dropdown-item">Task Managment</a>
                                <a href="feedback.html" class="dropdown-item">Feedback System</a>
                            </div>
                        </div>
                        
                    </div>
                    <a href="" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill  " style="margin-right: 20px;">Login </a>
                    <a href="" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Register </a>
                
                </div>
            </nav>
        </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}
