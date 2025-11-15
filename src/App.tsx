import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_CONFIGS } from "./utils/routerConfig";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <section>
      <AppHeader />
      <div>
        <Routes>
          {ROUTE_CONFIGS.map(({ path, component: Component }, index) => {
            const LazyComponent = React.lazy(Component);
            return (
              <Route
                key={index}
                path={path}
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyComponent />
                  </React.Suspense>
                }
              />
            );
          })}
        </Routes>
      </div>
    </section>
  );
}

export default App;
