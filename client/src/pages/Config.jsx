import { createEffect, createSignal, For, onMount } from "solid-js";
import { flattenJson } from "../utils/flattenJSON";
import { getRows } from "../utils/getRows";
import { convertCamelCaseToWords } from "../utils/convertCamelCaseToWords";
import Full from "../templates/Full";

// Most of this data should actually be non mutable so CRUD isnt the best term here
function CRUDTable(props) {

    const [rows, setRows] = createSignal([]);
    const headers = () => Object.keys(rows()[0] == null ? {} : rows()[0])
        .slice(1, -1);
    const selected = (i) => {
        const h = headers();
        const r = rows();
        return h.map((e, j) => [e, r[i][e]])
    };

    onMount(async () => {
        const data = await getRows(props.table); // fetch rows from API

        const out = data.map(flattenJson);

        setRows(out);
    });

    return (
        <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2">
            <h2>{props.table}</h2>
            <div class="grid grid-cols-[3fr_1fr] gap-2">
                <table class="text-slate-900 border-separate border-spacing-1 text-left">
                    <thead>
                        <tr class="border-black border-1">
                            {
                                headers()
                                    .map(convertCamelCaseToWords).map((key) => <th class="border-2 border-slate-300 px-2 w-28 bg-slate-50 min-w-fit">{String(key)}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rows().map((row) => (
                            <tr>
                                {Object.values(row).slice(1, -1).map((v) => <td class="border-2 border-slate-300 px-2 bg-slate-50">{String(v)}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div class="border-slate-300 border-2 rounded-sm p-2">
                    <h3>Selected:</h3>
                    <div>
                        {selected(1).map((s) =>
                            <div>
                                {s[0]}
                                {s[1] != null ? s[1].toString() : 'null'}
                            </div>
                        )}
                    </div>
                    <button>Disable</button>
                </div>
            </div>
        </section>
    );
}

function Config() {
    // TODO Option to add accounts, add jobs, add/set prices
    // Add GetActive API that only gets 'enabled' accounts and jobs, and gets newest prices
    // Have option to delete accounts and jobs, but in reality just disable them so that they are hidden from table results.
    // When prices are edited, don't actually edit prices in tables, just create new ones.
    // Add some option to view past prices and roll them back if need be.
    // Figure out how to factor Jobs' "metajson" into  the Jobs table.
    // Allow entries to be edited right in the table, and make a Save button appear next to rows that have been edited.
    return (
        <Full>
            <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2 flex flex-col gap-2">
                <h1>Config</h1>
                <CRUDTable table="Users" />
                {/**
            <CRUDTable table="Jobs" />
            <CRUDTable table="Prices" />
             */}
            </section>
        </Full>
    );
}
export default Config;