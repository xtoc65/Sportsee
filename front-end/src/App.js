import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

import "./assets/styles/index.css";

const GuardedRoute = () => {
  const { id } = useParams();
  const idEnInt = parseInt(id);
  return id === undefined || (idEnInt !== 12 && idEnInt !== 18) ? (
    <Navigate to="/404" />
  ) : (
    <Home />
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/user/:id" element={<GuardedRoute />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
