import Section from "../components/Section";
import Full from "../templates/Full";
import { createResource, createSignal, onMount } from "solid-js";
import { useParams } from "@solidjs/router";
import { format, addDays } from "date-fns";
import { BASE_URL } from "../utils/getRows";
import { flattenJson } from "../utils/flattenJSON";


const fetchOrder = async (id) =>
    (await fetch(BASE_URL + '/orders/' + id)).json();

const getViews = async () => {
    return (await fetch(BASE_URL + '/views').json());
};

function FormSection(props) {
    return (
        <div class="">
            <div class="grid grid-cols-2 gap-2  min-w-lg p-2 bg-slate-300 text-slate-800 rounded-sm mb-2">
                {props.children}
            </div>
        </div>
    )
}

function SummarySection(props) {
    return (
        <div class="">
            <div class="flex flex-col gap-5 min-w-lg p-2 bg-slate-300 text-slate-800 rounded-sm mb-2">
                {props.children}
            </div>
        </div>
    )
}

function H3(props) {
    return (
        <h3 class="m-1">{props.children}</h3>
    )
}

function Button(props) {
    return (
        <button class="bg-slate-500 text-slate-300 p-1 m-1 rounded-md">
            {props.children}
        </button>
    )
}

//USD formatter
const USDFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function ViewOrder() {

    const params = useParams();
    const [order, { mutate, refetch }] = createResource(() => {
        console.log("test" + params.id);
        return params.id;
    }, fetchOrder);

    const [items, setItems] = createSignal([]);
    const [total, setTotal] = createSignal(0);
    const history = order()?order().statusEntry:null;

    onMount(async () => {
        console.log(`id: ${params.id}`);
        console.log(fetchOrder(params.id));
    });

    return (
        <Full>
            <Section>
                <div class="p-2 grid grid-flow-row gap-9 w-[54rem]">

                    <div class="flex flex-row gap-2 justify-between items-end">
                        <div class="flex flex-col">
                            {/* ID */}
                            <div>
                                <label>Order #</label>
                                <span>{order() ? String(order().orderNo).padStart(5, 0) : ""}</span>
                            </div>

                            {/* Title */}
                            <span class="text-4xl font-bold">{order() ? order().title : "Loading..."}</span>
                        </div>

                        <div class="grid grid-cols-2">
                            {/* Due Date */}
                            <label htmlFor="date">Due</label>
                            <span>{order() ? format(new Date(order().dueAt), "MM/dd/yyyy") : 1}</span>

                            {/* Status */}
                            <label htmlFor="status">Status</label>
                            <select id="status" value={order() ? order().statusEntries[0].status.name : ""} class="text-slate-800 px-1 rounded-sm">
                                <option value={order() ? order().statusEntries[0].status.name : ""}>{order() ? order().statusEntries[0].status.name : ""}</option>
                            </select>
                        </div>

                    </div>
                    <div class="flex flex-row  gap-3">
                        <div>
                            <H3>Client</H3>
                            <FormSection id="client">
                                <label htmlFor="name">Name</label>
                                <span>{order() ? order().customer.name : "Loading"}</span>

                                <label htmlFor="phone">Phone Number</label>
                                <span>{order() ? (order().customer.phoneNumber ? order().customer.phoneNumber : "(none)") : ""}</span>

                                <label htmlFor="address">Address</label>
                                <span>{order() ? (order().customer.shippingAddress ? order().customer.shippingAddress : "(none)") : ""}</span>
                            </FormSection>
                        </div>
                        <div>
                            <H3>Destination</H3>
                            <FormSection>
                                {/* Destination */}
                                <span>
                                    {order()
                                        ? (order().shippingAddress
                                            ? "Ship to: " + order().shippingAddress
                                            : "In-store Pickup")
                                        : ""}
                                </span>
                            </FormSection>
                        </div>
                    </div>
                    <div>
                        <H3>Summary</H3>
                        <SummarySection>

                            {/* Notes */}
                            <label htmlFor="notes">Order Notes</label>
                            <textarea id="notes" value={order() ? (order().notes ? order().notes : "(none)") : "Loading"} disabled />
                            <table class="col-span-2 mb-3 text-left table-auto">
                                <tbody class="[&>*:nth-child(even)]:bg-slate-400">
                                    <tr>
                                        <th>Job</th>
                                        <th>Size</th>
                                        <th>Color</th>
                                        <th>Quantity</th>
                                        <th>File</th>
                                        <th>Note</th>
                                        <th>Price</th>
                                    </tr>
                                    {items().map(item =>
                                        <tr>
                                            <td>{item.job.jobName}</td>
                                            <td>{item.job.size}</td>
                                            <td>{item.job.color}</td>
                                            <td>{item.quantity}</td>
                                            <td>none</td>
                                            <td>{item.notes}</td>
                                            <td>{
                                                USDFormatter.format(() => {
                                                    setTotal(total() + item.job.price * item.quantity);
                                                    return item.job.price * item.quantity;
                                                })
                                            }</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td >test</td>
                                        <td >test</td>
                                        <td >test</td>
                                        <td >test</td>
                                        <td >Yes</td>
                                        <td >notes here</td>
                                        <td >$0.00</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div />
                            <div class="flex justify-end gap-4">
                                <label>Total</label> <span class="font-bold">{USDFormatter.format(total())}</span>
                            </div>
                        </SummarySection>
                    </div>
                    <div>
                        <H3>History</H3>
                        <SummarySection>
                            <ul class="flex flex-col-reverse">
                            {order()?order().statusEntries.map((sE) => 
                                <li>Order was moved into <span class="px-1 rounded-sm" style={{"background-color" : sE.status.displayColor}}>{sE.status.name}</span> status at {format(new Date(sE.createdAt),"p")} on {format(new Date(sE.createdAt),"PP")}.</li>
                            ):""}
                            </ul>
                        </SummarySection>
                    </div>
                </div>
            </Section>
        </Full>
    );
}
export default ViewOrder;