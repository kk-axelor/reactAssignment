
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,

} from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Login from "./pages/Login";
import { userContext } from "./context/userContext";
import { useContext } from "react";


function App() {
  const { user } = useContext(userContext)
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />} >
        <Route index element={<Home />} />
        <Route path="protected" element={user === null ? <Login /> : < Protected />} />
        <Route path="login" element={user === null ? <Login /> : <Home />} />
      </Route>
    </>
  ))




  return (
    <RouterProvider router={router} />
  );
}


export default App;
