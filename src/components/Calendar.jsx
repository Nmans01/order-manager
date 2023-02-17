import ButtonBar from "./ButtonBar"
import Icon from "./Icon"
import ButtonHeader from "./ButtonHeader";

export default function Calendar() {

    return (
        <section>
            <div id="calendarHeader" class="flex flex-row justify-between">
                <h2>January <span id="calendarDate"></span>2023</h2>
                <ButtonBar>
                    <a href="#">Month</a>
                    <a href="#">Week</a>
                    <a href="#">Day</a>
                    <div class="vertSpacer"></div>
                    <a href="#" class="hideForMobile">Prev</a>
                    <a href="#"><Icon imgSrc="./img/target.png" alt="" /></a>
                    <a href="#" class="hideForMobile">Next</a>
                </ButtonBar>
            </div>
            <div id="calendarBody" class="grid grid-flow-row grid-cols-7 grid-rows-6">
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}