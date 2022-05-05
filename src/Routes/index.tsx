//1. Libraries
import { Suspense } from "react";
import { Routes as Switch, Route } from "react-router-dom";

//2. Components
import { Loader } from "Components/Groups";

//3. Pages
import { Home } from "Pages";

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
