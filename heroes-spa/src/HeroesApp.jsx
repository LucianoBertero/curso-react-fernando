import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth"; //sirve para la authorizacion

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter></AppRouter>
    </AuthProvider>
  );
};
