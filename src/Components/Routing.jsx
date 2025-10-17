import { createBrowserRouter } from "react-router";
import App from "../App";
import { Component } from "react";
import Home from "./Home";
import Plants from "./Plants";
import AddCard from "./AddCard";
import PlantsDtls from "./PlantsDtls";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {index : true,Component: Home},
      {path : "/Plants",loader:()=>fetch("http://openapi.programming-hero.com/api/plants"),Component: Plants},
      {path : "/card",loader:()=>fetch("http://openapi.programming-hero.com/api/plants"),Component: AddCard},
      {path : "/detals/:id",Component: PlantsDtls}

    ]
  },
]);

export default router