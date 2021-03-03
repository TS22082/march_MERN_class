import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const getAllBlogs = async () => {
    const { data } = await axios.get("/blog");
    console.log(data);
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={AdminPage} />
          <Route path="/home" component={HomePage} />
          <Route exact path="/" component={WelcomePage} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
