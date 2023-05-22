import AudioPlayer from "../../player/AudioPlayer";
import Footer from "../footer/Footer";
import Navbar from "../navbar/NavBar";
import Sidebar from "../navbar/SideBar";
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
          <Outlet />
        </div>

        <footer className={Styles.root__footer}>
          <Footer />
        </footer>
      </main>

      <AudioPlayer />
    </>
  );
};

export default Root;
