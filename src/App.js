
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


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<AppLayout />} >
      <Route index element={<Home />} />
      <Route path="protected" element={<Protected />} />
    </Route>
    <Route path="/login" element={<Login />} />
  </>
))




function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
