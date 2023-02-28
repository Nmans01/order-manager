import ButtonBar from "./ButtonBar"
import Icon from "./Icon"
import ButtonHeader from "./ButtonHeader";

export default function Calendar() {

    return (
        <section class="border-slate-300 border-2 rounded-sm p-2 grid grid-rows-[min-content_1fr] bg-gray-700">
            <div id="calendarHeader" class="flex flex-row justify-between pb-1">
                <h2>January <span id="calendarDate"></span>2023</h2>
                <ButtonBar>
                    <button>Month</button>
                    <button>Week</button>
                    <button>Day</button>
                    <div class="w-px bg-cyan-50"></div>
                    <button>Prev</button>
                    <button><Icon imgSrc="./img/target.png" alt="" /></button>
                    <button>Next</button>
                </ButtonBar>
            </div>
            <div id="calendarBody" class="grid grid-flow-row grid-cols-7 grid-rows-[min-content_repeat(5,1fr)] text-center gap-1">
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <For each={Array(35).fill(1).map((x, y) => x + y)}>{(i) =>
                    <div class="border-slate-300 border-2 border-opacity-10 rounded-sm">{i<5?'':i-4}</div>
                }</For>
            </div>
        </section>
    );
}