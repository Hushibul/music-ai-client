//=== Libraries
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//=== Components
import Root from "./components/layouts/root/Root";
import HelpCenter from "./pages/HelpCenter";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Category from "./pages/category/Category";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/category/:type/:id" element={<Category />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
