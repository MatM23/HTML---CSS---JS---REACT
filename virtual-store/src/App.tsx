/* /src/App.tsx */
import Cart from "./views/Cart.tsx";
import Home from "./views/Home.tsx";
import Product from "./views/Product.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/product/:id", element: <Product/> }
  ]);
  


/* /src/App.tsx */
function App() {
    return <RouterProvider router={ browserRouter } />
  }
  
export default App;


