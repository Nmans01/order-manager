function Search() {
  return (
    <div>
      <label for="search"><img src="./img/search.png" alt="" /></label>
      <input type="text" id="search" placeholder="Search..." />
    </div>
  );
}

function NavButton(props) {
  return (
    <a href={props.href}>
      <img src={props.imgSrc} alt="" />
      {props.text}
    </a>
  );
}

export default function Header() {
  return (
    <header class="flex flex-row justify-between p-2 h-50">
      <h1 class=" h-min">OrderProPlus</h1>
      <nav class="flex flex-row gap-2">
        <Search/>
        <NavButton href="#" imgSrc="./img/plus.png" text="New..." />
        <NavButton href="#" imgSrc="./img/plus.png" text="Alerts" />
        <NavButton href="#" imgSrc="./img/plus.png" text="Account" />
      </nav>
    </header>
  );
}