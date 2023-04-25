import { A } from "@solidjs/router";
import ButtonBar from "./ButtonBar";
import Icon from "./Icon"
import ButtonHeader from "./ButtonHeader";
import { IMG_URL } from "../App";

function Search() {
  return (
    <div class="flex flex-row gap-2 items-center">
      <label for="search"><Icon imgSrc="/img/search.png" /></label>
      <input type="text" id="search" placeholder="Search..." class="text-black pl-2 rounded-sm" />
    </div>
  );
}

function NavButton(props) {
  return (
    <A href={props.href} class="flex flex-row gap-2 items-center">
      <Icon imgSrc={props.imgSrc} />
      {props.text}
    </A>
  );
}

export default function Header() {
  return (
    <header class="p-3 h-50">
      <ButtonHeader>
        <A href="/#"><h1 class="h-min text-xl font-semibold italic">Order Manager <span class="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(255,255,255,.3)] to-slate-200 opacity-60">Alpha</span> </h1></A>
        <nav>
          <ButtonBar>
            <Search/>
            <NavButton href="/orders/create" imgSrc="/img/plus.png" text="New..." />
            {
              // TODO: <NavButton href="#" imgSrc="./img/bell.png" text="Alerts" />
            }
            <NavButton href="/conf" imgSrc="/img/pencil.png" text="Config" />
            <NavButton href="/login" imgSrc="/img/account.png" text="Account" />
          </ButtonBar>
        </nav>
      </ButtonHeader>
    </header>
  );
}