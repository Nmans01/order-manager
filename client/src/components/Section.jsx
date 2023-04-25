import { children } from "solid-js";

function Section({children}) {

    return (
        <section class="border-slate-300 border-2 rounded-sm p-2 grid grid-rows-[min-content_1fr] bg-gray-700 overflow-y-scroll max-h-[875px]">
            {children}
        </section>
    );
}
export default Section;