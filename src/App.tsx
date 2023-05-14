import { NavLink, Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
