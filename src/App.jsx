import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
// import { StudentPortal } from "./StudentPortal";
import { Footer } from "./Footer";
import { LoginPage } from "./LoginPage";
import { StudentProfileIndex } from "./StudentProfileIndex";
import axios from "axios";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <StudentProfileIndex />,
        loader: () => axios.get("http://localhost:3000/students.json")
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;