import AppBar from "./AppBar.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <AppBar />
      </header>

      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
