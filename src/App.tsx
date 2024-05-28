import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./component";
import { Login } from "./page";
import { store } from "./redux/store";
import { routeList, routeListProps } from "./routes";

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Provider store={store}>
        <ConfigProvider
          button={{ className: "my-custom-btn" }}
          select={{ className: "custom-select" }}
          theme={{
            token: {
              colorPrimary: "#c1a06a",
              colorBgBase: "#fff",
            },
          }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route element={<Layout />}>
                {routeList.map((route: routeListProps) => (
                  <Route
                    key={route.id}
                    path={route.to}
                    element={route.element}
                  ></Route>
                ))}
              </Route>
            </Routes>
          </Router>
        </ConfigProvider>
      </Provider>
    </Suspense>
  );
};

export default App;
