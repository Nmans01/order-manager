import { lazy } from "solid-js";
const Header    = lazy(() => import('./components/Header'));
const Queue     = lazy(() => import('./components/Queue'));
const Calendar  = lazy(() => import('./components/Calendar'));

export default function App() {
  return (
    <div class="bg-gray-700 text-white grid grid-flow-row grid-rows-[min-content_1fr] h-screen ">
      <Header/>
      <main class="grid grid-flow-col">
        <Queue />
        <Calendar />
      </main>
    </div>
  );
}