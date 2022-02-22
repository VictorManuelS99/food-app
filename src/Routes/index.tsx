//1. Libraries
import { Suspense } from "react";
import { Routes as Switch, Route } from "react-router-dom";

//2. Components
import { Loader } from "../Components/Groups/Loader/Loader";

//3. Pages
import { Home } from "../Pages/Home";

function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route element={<Home />} path="/" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
