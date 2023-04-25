import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";
const Header      = lazy(() => import('./components/Header'));
const Overview    = lazy(() => import('./pages/Overview'));
const CreateOrder = lazy(() => import('./pages/CreateOrder'));
const ViewOrder = lazy(() => import('./pages/ViewOrder'));
const Config      = lazy(() => import('./pages/Config'));
const Login       = lazy(() => import('./pages/Login'));

export const IMG_URL = "localhost:3001/";

export default function App() {
  return (
    <div class="bg-gray-900 text-white h-screen relative">
      <Routes>
        <Route path="/" component={Overview}/>
        <Route path="/orders/create" component={CreateOrder}/>
        <Route path="/orders/:id" component={ViewOrder}/>
        <Route path="/conf" component={Config}/>
        <Route path="/login" component={Login}/>
      </Routes>
    </div>
  );
}