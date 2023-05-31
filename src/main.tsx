//=== Libraries
import ReactDOM from "react-dom/client";

//=== Components
import App from "./App";
import AudioProvider from "./context/AudioContext";

//=== Styles
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AudioProvider>
    <App />
  </AudioProvider>
);
