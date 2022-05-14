import { Navbar } from "Components/Templates";
import { FoodRoutes } from "Components/Templates/FoodRoutes";

import { SecionLayout } from "Layouts/Section";

export const Home = () => {
  const username = "Jaegar Resto";

  return (
    <SecionLayout title={username} aside>
      <Navbar />
      <FoodRoutes />
    </SecionLayout>
  );
};
