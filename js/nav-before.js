document.addEventListener("DOMContentLoaded", function() {
    generateNavbar();
  });
  
  function generateNavbar() {
    const navbarHTML = `
     
     
      <div class="container-fluid nav-bar">
        <div class="container">
            <nav class="navbar navbar-light navbar-expand-lg py-4">
                <a href="home.html" class="navbar-brand">
                    <h1 class="text-primary fw-bold mb-0">H<span class="text-dark">R</span> </h1>
                </a>
                <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars text-primary"></span>
                </button>
                <div class="collapse navbar-collapse" style="align-items: center;" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a href="home.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="contact.html" class="nav-item nav-link">contact us</a>
                        
                    </div>
                    <a href="login.html" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill  " style="margin-right: 20px;">Login </a>
                    <a href="Register.html" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Register </a>
                
                </div>
            </nav>
        </div>
    </div>
  
    `;
  
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  }
  