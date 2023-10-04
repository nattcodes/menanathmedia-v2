
//pages
import Home from "./Pages/Home"

//layout
import RootLayout from "./Layout/RootLayout";

//router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>} >
      <Route exact index element={<Home/>}/>
      
    </Route>
  )
);

function App() {
  return (
    <div className="App ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
