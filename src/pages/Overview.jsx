import { lazy } from "solid-js";
const Queue     = lazy(() => import('../components/Queue'));
const Calendar  = lazy(() => import('../components/Calendar'));

function Overview() {
    return (
        <main class="grid grid-flow-col gap-2 p-2 pt-0">
            <Queue/>
            <Calendar/>
        </main>
    );
}
export default Overview;