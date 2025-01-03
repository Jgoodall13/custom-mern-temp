import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function HomeLayout() {
  return (
    <>
      <NavBar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
