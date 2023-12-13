import React, { Suspense } from "react";

// routes
import NewRoutes from "./routess";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
// components
import { Loader } from "./components";

export default function App() {
  return (
    <ThemeConfig>
      <Router>
        <GlobalStyles />

        <Suspense fallback={<Loader fallback={true} />}>
          <NewRoutes />
        </Suspense>
      </Router>
    </ThemeConfig>
  );
}
