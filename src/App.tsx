import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Products, Login } from "./pages";
import { PrivateRoutes } from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              element={<Home />}
              path="/"
            />
            <Route
              element={<Products />}
              path="/products"
            />
          </Route>
          <Route
            element={<Login />}
            path="/login"
          />
          <Route
            path="*"
            element={<div>Not Found</div>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
