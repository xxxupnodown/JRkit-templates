import React from "react";
import { createRoot } from 'react-dom/client';
import Router from '@router';

createRoot(document.getElementById("root") as HTMLElement)
  .render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );