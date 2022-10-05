import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
