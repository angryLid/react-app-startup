import React from "react";
import { createRoot } from "react-dom/client";

import { BaseLayout } from "./page/_Layout";

const root = document.getElementById("root") || document.createElement("div");

createRoot(root).render(
  <React.StrictMode>
    <BaseLayout />
  </React.StrictMode>
);
