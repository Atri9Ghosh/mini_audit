const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-left">
        <span className="app-logo">⏱️</span>
        <div>
          <h1 className="app-title">Mini Audit Trail Generator</h1>
          <p className="app-subtitle">
            Track every change with word-level version history.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
