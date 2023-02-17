export default function Header() {

    return (
        <header>
          <h1 class="gradientText"><em>OrderProPlus</em></h1>
          <nav>
            <div class="hideForMobile">
              <label for="search"><img src="./img/search.png" alt="Search" /></label>
              <input type="text" id="search" placeholder="Search..." />
            </div>
            <a href="#" class="mobileOnly"><img src="./img/search.png" alt="Search" /> Search</a>
            <a href="#"><img src="./img/plus.png" alt="New" /> New...</a>
            <a href="#"><img src="./img/bell.png" alt="Alerts" /> Alerts</a>
            <a href="#"><img src="./img/account.png" alt="Account" /> Account</a>
          </nav>
        </header>
    );
}