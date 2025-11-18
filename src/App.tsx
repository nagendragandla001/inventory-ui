import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_CONFIGS } from "./utils/routerConfig";
import AppHeader from "./components/AppHeader";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  return (
    <section>
      <AppHeader />
      <div>
        <Routes>
          {ROUTE_CONFIGS.map(
            ({ path, component: Component, protected: isProtected }, index) => {
              if (!Component) {
                return (
                  <Route
                    key={index}
                    path={path}
                    element={<Navigate to="/" />}
                  />
                );
              }

              const LazyComponent = React.lazy(Component);
              const lazyElement = (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <LazyComponent />
                </React.Suspense>
              );

              const routeElement = isProtected ? (
                <ProtectedRoute>{lazyElement}</ProtectedRoute>
              ) : (
                lazyElement
              );

              return <Route key={index} path={path} element={routeElement} />;
            }
          )}
        </Routes>
      </div>
    </section>
  );
}

export default App;
