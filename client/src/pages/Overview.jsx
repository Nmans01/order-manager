import { createResource, createSignal, lazy, onMount } from "solid-js";
import { flattenJson } from "../utils/flattenJSON";
import { BASE_URL } from "../utils/getRows";
const Queue = lazy(() => import('../components/Queue'));
const Calendar = lazy(() => import('../components/Calendar'));

const getOrders = async () => {
    const response = await fetch(BASE_URL + '/orders');
    const data = await response.json();
    return data;
};
const getViews = async () => {
    const response = await fetch(BASE_URL + '/views');
    const data = await response.json();
    return data;
};

function Overview() {

    const [view,setView] = createSignal();
    // const [orders] = createResource(view, getOrders);    
    // const [views] = createResource(view, getViews);  

    let orders;
    onMount(async () => {
        const data = await getOrders(); // fetch rows from API

        const out = data.map(flattenJson);

        orders=out;
        console.log(orders);
    });

    return (
        <main class="grid grid-flow-col grid-cols-[20rem_1fr] gap-2 p-2 pt-0">
            <Queue orders={orders} view={view} setView={setView}/>
            <Calendar orders={orders}/>
        </main>
    );
}
export default Overview;