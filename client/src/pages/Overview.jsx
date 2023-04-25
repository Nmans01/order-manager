import { createResource, createSignal, lazy, onMount } from "solid-js";
import { flattenJson } from "../utils/flattenJSON";
import { BASE_URL } from "../utils/getRows";
import ColumnAndPane from "../templates/ColumnAndPane";
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
    const [orders,setOrders] = createSignal([]);
    // const [orders] = createResource(view, getOrders);    
    // const [views] = createResource(view, getViews);  

    onMount(async () => {
        const data = await getOrders(); // fetch rows from API

        const out = data.map(flattenJson);

        setOrders(out);
        console.log("OnMount: orders: "+orders());
    });

    return (
        <ColumnAndPane>
            <Queue orders={orders()} view={view} setView={setView}/>
            {/*console.log(orders())*/}
            <Calendar orders={orders()}/>
        </ColumnAndPane>
    );
}
export default Overview;