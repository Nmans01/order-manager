import {A} from "@solidjs/router";
import { For } from "solid-js";
import Icon from "./Icon"
import ButtonBar from "./ButtonBar";
import ButtonHeader from "./ButtonHeader";

function QueueItem(props){

  /*
  const order = {
    statusColor : "#86efac",
    orderNumber : 44444,
    custName    : "Business Company LLC",
    orderTitle  : "Business Suite"
  }*/

  return(
    <A href={"/orders/"+props.order.orderNo} class="border-slate-300 border-2 border-opacity-0 rounded-sm hover:border-white active:brightness-75 px-1 flex flex-row items-center gap-3">
      <div class={"rounded-full w-2 h-2"} style={{"background-color":props.order.displayColor}}></div>
      <div>
        <div class="bg-white text-black rounded-sm inline-block px-1 text-xs">Order #{props.order.orderNo}</div><span class="text-xs"> &nbsp&nbsp{props.order.name}</span><br/>
        {props.order.title}      
      </div>
    </A>
  );
}

export default function Queue(props) {
  
  // console.log(props.orders);

  return (
    <section class="order-slate-300 border-2 rounded-sm p-1 bg-gray-700">
      <div class="px-1">
        <h3 class="my-1">Queue</h3>
        {/* TODO
        <ButtonHeader>
          <select name="Select a view" id="" class="text-black px-1 py-0.5 rounded-sm" onSelect={(e) => {props.setView(e.value)}}>
            <option value="Test">Production</option>
          </select>
          <ButtonBar>
            <button class="hover:brightness-90 active:brightness-75"><Icon imgSrc="/img/pencil.png" alt="Edit" /></button>
            <button class="hover:brightness-90 active:brightness-75"><Icon imgSrc="/img/filter.png" alt="Filter" /></button>
          </ButtonBar>
        </ButtonHeader>
         */}
      </div>

      <div class="flex flex-col gap-1 mt-2 overflow-scroll h-[calc(100vh-8.5rem)] pr-2.5">
        <For each={props.orders}>{(order) =>
            <QueueItem order={order}/>
        }</For>
      </div>
    </section>
  );
}