import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScrolling from "./components/SmoothScroll.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SmoothScrolling>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SmoothScrolling>
);
