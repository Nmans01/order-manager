import { createEffect, createSignal } from "solid-js";
import { addMonths, setDate, getDay, addDays, format, isSameDay, isSameMonth } from "date-fns";
import ButtonBar from "./ButtonBar";
import Icon from "./Icon";
import ButtonHeader from "./ButtonHeader";

export default function Calendar() {
    let   today = new Date();

    const [monthOffset, setMonthOffset] = createSignal(0);
    const incMonth = ()=>{setMonthOffset(monthOffset()+1)};
    const decMonth = ()=>{setMonthOffset(monthOffset()-1)};
    const resetMonth = ()=>{setMonthOffset(0)};
    const currentMonth = () => addMonths(today,monthOffset());

    const calendarGetDate = (i)=>{
        let firstOfMonth = setDate(currentMonth(),1);
        let dayOnFirstOfMonth = getDay(firstOfMonth);

        let date = addDays(firstOfMonth,i-dayOnFirstOfMonth-1);

        return {
            dateNo: format(date,'d'),
            inMonth: isSameMonth(firstOfMonth, date),
            isToday: isSameDay(today,date)
        };
    };

    return (
        <section class="border-slate-300 border-2 rounded-sm p-2 grid grid-rows-[min-content_1fr] bg-gray-700">
            <div id="calendarHeader" class="flex flex-row justify-between pb-1">
                <h2>{format(currentMonth(),"MMMM yyyy")}</h2>
                <ButtonBar>
                    {/*
                    <button>Month</button>
                    <button>Week</button>
                    <button>Day</button>
                    <div class="w-px bg-cyan-50"></div>
                    */}
                    <button onClick={decMonth}>Prev</button>
                    <button onClick={resetMonth}><Icon imgSrc="./img/target.png" alt="" /></button>
                    <button onClick={incMonth}>Next</button>
                </ButtonBar>
            </div>
            <div id="calendarBody" class="grid grid-flow-row grid-cols-7 grid-rows-[min-content_repeat(6,1fr)] text-center gap-1">
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <For each={Array(42).fill(1).map((x, y) => x + y)}>{(i) =>
                    <div class={"border-slate-300 border-2 border-opacity-10 rounded-sm "+(calendarGetDate(i)['inMonth']?"":"opacity-30")+(calendarGetDate(i)['isToday']?"border-opacity-40":"")}>{calendarGetDate(i)['dateNo']}</div>
                }</For>
            </div>
        </section>
    );
}