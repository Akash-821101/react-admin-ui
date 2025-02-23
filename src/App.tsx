import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Menu from "./component/menu/Menu";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import './styles/global.scss'

function App() {


  const Layout = () => {
    return (
      <div className="main">
       <Navbar/>
       <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>

       </div>
      <Footer/>
      </div>
     
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/users',
          element: <Users/>
        },
         {
          path: '/products',
          element: <Products/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ]);

  return (
   <RouterProvider router={router}/>
  )
}

export default App
