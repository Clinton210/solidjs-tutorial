export function NavBar() {
  return (
    <nav class="navbar navbar-expand bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand icon-link" href="/">
          <span className="material-symbols-outlined">edit_square</span>
          My App
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/signup">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}