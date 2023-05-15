import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer></footer>
    </>
  );
}
