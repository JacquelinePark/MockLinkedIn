// Add logo to the left side

import "./navbar.css";

function NavBar() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/">
                <img
                  src={require("../images/LinkedIn Logo.png")}
                  style={{ width: 130 }}
                />
              </a>
            </div>
            <div class="navbar-nav ms-auto">
              <a class="nav-item nav-link" href="/articles">Articles</a>
              <a class="nav-item nav-link" href="/people">People</a>
              <a class="nav-item nav-link" href="/learning">Learning</a>
              <a class="nav-item nav-link" href="/jobs">Jobs</a>
              <a class="nav-item nav-link" href="/games">Games</a>
              <span style={{ color: "#6c757d", padding: "0.5rem"}}>|</span>
              <button href="joinnow">Join now</button>
              <button class="signbutton" href="signup">Sign up</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
