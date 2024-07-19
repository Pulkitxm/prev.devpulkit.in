import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScrolling from "./components/SmoothScroll.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SmoothScrolling>
    <BrowserRouter>
      <>
        <App />
        <Analytics debug={false} />
        <SpeedInsights debug={false} />
      </>
    </BrowserRouter>
  </SmoothScrolling>
);
