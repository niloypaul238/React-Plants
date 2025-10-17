import { createBrowserRouter } from "react-router";
import App from "../App";
import { Component } from "react";
import Home from "./Home";
import Plants from "./Plants";
import AddCard from "./AddCard";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {index : true,Component: Home},
      {path : "/Plants",Component: Plants},
      {path : "/card",Component: AddCard}

    ]
  },
]);

export default router