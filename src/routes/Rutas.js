import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeProductos } from "../componentes/productos";
import { Home } from "../page";
import { Layout } from "../layouts";
import {Productos} from "../componentes/formulario";

export function Rutas() {
  const Layouts = (Layout, Page) => (
    <Layout>
      <Page />
    </Layout>
  );

  return (
    <Routes>
      <Route path="/" element={Layouts(Layout, Home)} />
      <Route path="/producto" element={Layouts(Layout, HomeProductos)} />
      <Route path="/formproductos" element={Layouts(Layout,Productos)}/>
    </Routes>
  );
}