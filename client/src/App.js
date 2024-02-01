import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

import Navbar from "./Navbar";
import "ldrs/pulsar";

function App() {
  return (
    <div>
      {/* <l-pulsar loading ={loading} size="70" speed="1.75" color="red" ></l-pulsar> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/" element={<CreateUser />}></Route>
          {/* <Route path='/create' element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
