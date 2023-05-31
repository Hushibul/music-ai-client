// import AudioPlayer from "../../player/AudioPlayer";

//=== Libraries
import { Outlet } from "react-router-dom";

//=== Styles
import Styles from "./Root.module.scss";

//=== Components
import Footer from "../footer/Footer";
import Navbar from "../navbar/NavBar";
import Sidebar from "../navbar/SideBar";

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
          <Outlet />
        </div>

        <footer className={Styles.root__footer}>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Root;
