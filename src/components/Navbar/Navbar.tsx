//Main Navigation Bar

export default function Navbar() {
  return (
    <header className="d-flex">
      <div
        id="header-content-container"
        className="row-cols-md d-flex justify-content-between align-items-center"
      >
        <div
          id="header-message-container"
          className="row-cols-md d-flex align-items-center"
        >
          <h1>Where in the world?</h1>
        </div>
        <div
          id="theme-toggler-container"
          className="row-cols-md d-flex align-items-center"
        >
          <button id="theme-toggler">
            <h2 id="toggle-text">🌙 Dark Mode</h2>
          </button>
        </div>
      </div>
    </header>
  );
}
