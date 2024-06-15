document.addEventListener("DOMContentLoaded", function() {
    generateFooter();
  });
  
  function generateFooter() {
    const footerHTML = `
      <!-- Footer -->
      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <section class="" style="padding: 1px;">
          <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  We are a company that performs all technical work for organizations interested in the IT sector
                </p>
              </div>
              <!-- Grid column -->
  
              <!-- Grid column -->
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">
                  Services
                </h6>
                <p><a href="#!" class="text-reset">Leave Application</a></p>
                <p><a href="#!" class="text-reset">View employees information</a></p>
                <p><a href="#!" class="text-reset">Company Policies</a></p>
                <p><a href="#!" class="text-reset">Task Management</a></p>
                <p><a href="#!" class="text-reset">Feedback System</a></p>
              </div>
              <!-- Grid column -->
  
              <!-- Grid column -->
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">Home</h6>
                <p><a href="#!" class="text-reset">About</a></p>
                <p><a href="#!" class="text-reset">Profile</a></p>
              </div>
              <!-- Grid column -->
  
              <!-- Grid column -->
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> Jordan, Irbid, Al-Hashemi Street</p>
                <p><i class="fas fa-envelope me-3"></i> HR@gmail.com</p>
                <p><i class="fas fa-phone me-3"></i> + 962 792 567 88</p>
                <p><i class="fas fa-print me-3"></i> + 962 792 567 89</p>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->
  
        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
          © 2024 Copyright:
          <a class="text-reset fw-bold" href="#">HR.com</a>
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    `;
  
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
  