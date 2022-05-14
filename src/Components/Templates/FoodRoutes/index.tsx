import { Routes as Switch, Route } from "react-router-dom";

import { Dishes } from "../Dishes";

export const FoodRoutes = () => {
  return (
    <Switch>
      <Route element={<Dishes title="Choose Dishes" />} path="/" />
    </Switch>
  );
};
