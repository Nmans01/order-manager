import Icon from "./Icon"
import ButtonBar from "./ButtonBar";
import ButtonHeader from "./ButtonHeader";

function QueueItem(props){
  return(
    <div class="border-slate-300 border-2 border-opacity-10 rounded-sm hover:border-white p-1">
      test
    </div>
  );
}

export default function Queue() {
  return (
    <section class="order-slate-300 border-2 rounded-sm p-1 bg-gray-700">
      <h3 class="mb-1">Queue</h3>
      <ButtonHeader>
        <select name="Select a view" id="" class="text-black px-1 py-0.5 rounded-sm">
          <option value="Test">Test</option>
        </select>
        <ButtonBar>
          <a href="#"><Icon imgSrc="./img/pencil.png" alt="Edit" /></a>
          <a href="#"><Icon imgSrc="./img/filter.png" alt="Filter" /></a>
        </ButtonBar>
      </ButtonHeader>
      <div id="queue" class="flex flex-col gap-1 pt-2">
        <For each={Array.apply(null, Array(10))}>{(i) =>
            <QueueItem>Test</QueueItem>
        }</For>
      </div>
    </section>
  );
}