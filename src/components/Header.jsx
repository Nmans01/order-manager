import ButtonBar from "./ButtonBar";
import Icon from "./Icon"
import ButtonHeader from "./ButtonHeader";

function Search() {
  return (
    <div class="flex flex-row gap-2 items-center">
      <label for="search"><Icon imgSrc="./img/search.png" /></label>
      <input type="text" id="search" placeholder="Search..." />
    </div>
  );
}

function NavButton(props) {
  return (
    <a href={props.href} class="flex flex-row gap-2 items-center">
      <Icon imgSrc={props.imgSrc} />
      {props.text}
    </a>
  );
}

export default function Header() {
  return (
    <header class="p-2 h-50">
      <ButtonHeader>
        <h1 class=" h-min">OrderProPlus</h1>
        <nav>
          <ButtonBar>
            <Search />
            <NavButton href="#" imgSrc="./img/plus.png" text="New..." />
            <NavButton href="#" imgSrc="./img/bell.png" text="Alerts" />
            <NavButton href="#" imgSrc="./img/account.png" text="Account" />
          </ButtonBar>
        </nav>
      </ButtonHeader>
    </header>
  );
}