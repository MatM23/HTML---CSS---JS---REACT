/* /src/App.tsx */
import Cart from "./views/Cart.tsx";
import Home from "./views/Home.tsx";
import Product from "./views/Product.tsx";
import NotFound from "./views/NotFound.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import OnSale from "./views/OnSale.tsx";

const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/product/:id", element: <Product/> },
    { path: "/on-sale", element: <OnSale/>},
    { path: "/*", element: <NotFound /> },
  ]);
  


/* /src/App.tsx */
function App() {
    return <RouterProvider router={ browserRouter } />
  }
  
export default App;


