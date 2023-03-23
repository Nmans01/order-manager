import { createEffect, createSignal, For, onMount } from "solid-js";
import { flattenJson } from "../utils/flattenJSON";
import { getRows } from "../utils/getRows";

// Most of this data should actually be non mutable so CRUD isnt the best term here
function CRUDTable(props) {

    const [rows, setRows] = createSignal([]);
    const headers = () => {
        return Object.keys(rows()[0]==null?{}:rows()[0]);
    };

    onMount(async () => {
        const data = await getRows(props.table); // fetch rows from API

        const out = data.map(flattenJson);

        setRows(out);
    });

    return (
        <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2">
            <h2>{props.table}</h2>
            <table class="bg-slate-50 text-slate-900 border-separate border-spacing-1 border text-left">
                <thead>
                    <tr class="border-black border-1">
                        {
                            headers().slice(1,-1).map((key) => <th class="border-2 border-slate-600 px-2 w-28">{String(key)}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {rows().map((row) => (
                        <tr>
                            {Object.values(row).slice(1,-1).map((v) => <td class="border-2 border-slate-600 px-2">{String(v)}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

function Config() {
    // TODO Option to add accounts, add jobs, add/set prices
    // Add GetActive API that only gets 'enabled' accounts and jobs, and gets newest prices
    // Have option to delete accounts and jobs, but in reality just disable them so that they are hidden from table results.
    // When prices are edited, don't actually edit prices in tables, just create new ones.
    // Add some option to view past prices and roll them back if need be.
    return (
        <main class="px-2 grid grid-flow-col grid-cols-[1fr]">
            <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2 flex flex-col gap-2">
                <h1>Config</h1>
                <CRUDTable table="Users" />
                <CRUDTable table="Jobs" />
                <CRUDTable table="Prices" />
            </section>
        </main>
    );
}
export default Config;