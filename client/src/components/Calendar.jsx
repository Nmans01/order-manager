import { createEffect, createSignal } from "solid-js";
import { addMonths, setDate, getDay, addDays, format, isSameDay, isSameMonth } from "date-fns";
import ButtonBar from "./ButtonBar";
import Icon from "./Icon";
import ButtonHeader from "./ButtonHeader";
import Section from "./Section";
import { A } from "@solidjs/router";

export default function Calendar(props) {
    let today = new Date();

    const [monthOffset, setMonthOffset] = createSignal(0);
    const incMonth = () => { setMonthOffset(monthOffset() + 1) };
    const decMonth = () => { setMonthOffset(monthOffset() - 1) };
    const resetMonth = () => { setMonthOffset(0) };
    const currentMonth = () => addMonths(today, monthOffset());

    const calendarGetDate = (i) => {
        let firstOfMonth = setDate(currentMonth(), 1);
        let dayOnFirstOfMonth = getDay(firstOfMonth);

        let date = addDays(firstOfMonth, i - dayOnFirstOfMonth - 1);

        return {
            dateNo: format(date, 'd'),
            dateObj: date,
            inMonth: isSameMonth(firstOfMonth, date),
            isToday: isSameDay(today, date)
        };
    };

    const [ordersByDate, setOrdersByDate] = createSignal({});
    createEffect(() => {
        setOrdersByDate(
            ((orders) => {
                if (orders == {} || orders == null) return null;

                let ordersByDate = {};
                console.log("Orders bb: " + JSON.stringify(orders));
                orders.map((it) => {
                    if (ordersByDate[it.createdAt.slice(0, 10)] == null)
                        ordersByDate[it.createdAt.slice(0, 10)] = [];

                    ordersByDate[it.createdAt.slice(0, 10)].push(it);
                });
                console.log("Orders by date: " + JSON.stringify(ordersByDate));
                return ordersByDate;
            })(props.orders)
        );
    });

    console.log(props.orders);

    return (
        <Section>
            <div id="calendarHeader" class="flex flex-row justify-between pb-1">
                <h2>{format(currentMonth(), "MMMM yyyy")}</h2>
                <ButtonBar>
                    {/*
                <button>Month</button>
                <button>Week</button>
                <button>Day</button>
                <div class="w-px bg-cyan-50"></div>
                */}
                    <button onClick={decMonth}>Prev</button>
                    <button onClick={resetMonth}>Today</button>
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
                    <div class={"border-slate-300 border-2 border-opacity-10 rounded-sm flex flex-col " + (calendarGetDate(i)['inMonth'] ? "" : "opacity-30") + (calendarGetDate(i)['isToday'] ? "border-opacity-40" : "")}>
                        {calendarGetDate(i)['dateNo']}
                            {
                                ((orders) => orders
                                    ? orders.map((order) =>
                                        <A href={"/orders/"+String(order.orderNo)} class="m-1 rounded-sm text-slate-700" style={{background: order.displayColor}}>
                                            {"#" + String(order.orderNo).padStart(5, 0)}
                                        </A>
                                    )
                                    :
                                    ""
                                )(ordersByDate()[format(calendarGetDate(i)['dateObj'], "yyyy-MM-dd")])
                            }
                    </div>
                }</For>
            </div>
        </Section>
    );
}