import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/Sidebar";
import Styles from "./Root.module.scss";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className={Styles.root}>
        <aside>
          <Sidebar />
        </aside>
        <div className={Styles.root__children}>
          <div className={Styles.root__children_paddings}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Root;
