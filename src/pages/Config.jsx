function Config() {

    // TODO Add accounts, add jobs, add/set prices
    return (
        <main class="px-2 grid grid-flow-col grid-cols-[1fr]">
            <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2 flex flex-col gap-2">
                <h1>Config</h1>
                <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2">
                    <h2>Users</h2>
                    <table class="bg-slate-50 text-slate-900">
                        <thead>
                            <tr>
                                <th>Test</th>
                                <th>Test2</th>
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

                <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2">
                    <h2>Jobs</h2>
                </section>
                
                <section class="border-slate-300 border-2 rounded-sm bg-gray-700 max-w-6xl p-2">
                    <h2>Prices</h2>
                </section>
            </section>
        </main>
    );
}
export default Config;