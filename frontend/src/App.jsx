// ---------------------------
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/public/vite.svg";

import { RouterProvider, RouterOutlet } from "@tanstack/react-router";
import { router } from "./router"; // Import your router configuration

//
<script
    src="https://kit.fontawesome.com/2d61b4edae.js"
    crossorigin="anonymous"
></script>;

// ---------------------------------------------------
// Importing App.css at last to override the necessary
import "./App.css";

const App = () => {
    return (
        <RouterProvider router={router}>
            <div className="App">
                {/* Renders the component for the current route */}
                <RouterOutlet />
            </div>
        </RouterProvider>
    );
};

export default App;
