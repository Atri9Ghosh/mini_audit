import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">{children}</main>
    </div>
  );
};

export default AppLayout;
