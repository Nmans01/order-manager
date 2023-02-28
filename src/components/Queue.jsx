import Icon from "./Icon"
import ButtonBar from "./ButtonBar";
import ButtonHeader from "./ButtonHeader";

function QueueItem(props){
  return(
    <div class="border-slate-300 border-2 rounded-sm hover:border-white">
      test
    </div>
  );
}

export default function Queue() {
  return (
    <section>
      <h3>Queue</h3>
      <ButtonHeader>
        <select name="Select a view" id="">
          <option value="Test">Test</option>
        </select>
        <ButtonBar>
          <a href="#"><Icon imgSrc="./img/pencil.png" alt="Edit" /></a>
          <a href="#"><Icon imgSrc="./img/filter.png" alt="Filter" /></a>
          <div class="vertSpacer"></div>
        </ButtonBar>
      </ButtonHeader>
      <div id="queue" class="flex flex-col gap-1">
        <For each={Array.apply(null, Array(10))}>{(i) =>
            <QueueItem>Test</QueueItem>
        }</For>
      </div>
    </section>
  );
}