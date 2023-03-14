import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";
const Header    = lazy(() => import('./components/Header'));
const Overview  = lazy(() => import('./pages/Overview'));
const CreateOrder  = lazy(() => import('./pages/CreateOrder'));

export default function App() {
  return (
    <div class="bg-gray-900 text-white grid grid-flow-row grid-rows-[min-content_1fr] h-screen ">
      <Header/>
      <Routes>
        <Route path="/" component={Overview}/>
        <Route path="/orders/create" component={CreateOrder}/>
        <Route path="/orders/id:" component={<></>}/>
        <Route path="/conf" component={<></>}/>
      </Routes>
    </div>
  );
}