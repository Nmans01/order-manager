import { For } from "solid-js";
import { getMany } from "../scripts/crud";

// Most of this data should actually be non mutable so CRUD isnt the best term here
function CRUDTable(props) {

    // get table from db
    console.log(getMany("Users"));

    return (
        <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2">
            <h2>{props.table}</h2>
            <table class="bg-slate-50 text-slate-900">
                <thead>
                    <tr>
                        <td>Test</td>
                        <td>Test</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test</td>
                        <td>Test</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

function Config() {
    // TODO Add accounts, add jobs, add/set prices
    return (
        <main class="px-2 grid grid-flow-col grid-cols-[1fr]">
            <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2 flex flex-col gap-2">
                <h1>Config</h1>
                <CRUDTable table="Users"/>
                <CRUDTable table="Jobs"/>
                <CRUDTable table="Prices"/>
            </section>
        </main>
    );
}
export default Config;