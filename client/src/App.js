import "./App.css";
import axios from "axios";
import { useEffect } from "react";

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
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
