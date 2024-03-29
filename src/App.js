import { Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const App = () => (
  <>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
  </>
);

export default App;
