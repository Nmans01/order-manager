import Section from "../components/Section";
import Full from "../templates/Full";
import { format, addDays } from "date-fns";

function FormSection(props) {
    return (
        <div class="">
            <div class="grid grid-cols-2 gap-1  min-w-lg p-2 bg-slate-300 text-slate-800 rounded-sm mb-2">
                {props.children}
            </div>
        </div>
    )
}

function StateSelect(props) {
    return (
        <select name="state" id="state" class="w-[15ch] px-1 rounded-sm">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </select>
    )
}

function TextInput(props) {
    return (
        <input type="text" id={props.id} class="px-1 rounded-sm">{props.children}</input>
    )
}

function H3(props) {
    return (
        <h3 class="m-1">{props.children}</h3>
    )
}

function Button(props) {
    return (
        <button class="bg-slate-500 text-slate-200 p-1 m-1 rounded-md active:brightness-75">
            {props.children}
        </button>
    )
}

function CreateOrder() {
    return (
        <Full>
            <Section>
                <h2>Create Order</h2>
                <form onsubmit={(e) => e.preventDefault()} class="p-2">
                    <H3>Client</H3>
                    <FormSection id="client">
                        <label htmlFor="name">Name</label>
                        <TextInput id="name" />

                        <label htmlFor="phone">Phone Number</label>
                        <TextInput id="phone" />

                        <label htmlFor="address">Address</label>
                        <TextInput id="address" />
                        <div />
                        <div class="flex gap-1">
                            {/*City:<TextInput id="city" />*/}
                            City:<input type="text" id="city" maxlength="10" class="w-[10ch] px-1 rounded-sm"/>
                            State:<StateSelect/>
                            ZIP:<input type="text" id="zip" maxlength="5" class="w-[6ch] px-1 rounded-sm" pattern="[0-9]+"/>
                        </div>
                    </FormSection>
                    <H3>Order Information</H3>
                    <FormSection id="order">
                        <label htmlFor="title">Order Title</label>
                        <input type="text" id="title" />
                        <label htmlFor="date">Due Date</label>
                        <input
                            type="date"
                            id="date"
                            value={format(addDays(new Date(), 3), "yyyy-MM-dd")}
                            min={format(addDays(new Date(), 1), "yyyy-MM-dd")}
                        />
                        <label htmlFor="destination">Destination</label>
                        <select id="destination">
                            <option value="instore">In-store Pickup</option>
                            <option value="instore">Deliver to Address</option>
                        </select>
                        <label htmlFor="title">Order Notes</label>
                        <textarea id="title" />
                    </FormSection>
                    <H3>Items</H3>
                    <FormSection id="job">
                        <label htmlFor="job">Job</label>
                        <select id="job" />
                        {/*Create these next couple fields dynamically*/}
                        <label htmlFor="size">Size</label>
                        <select id="size" />
                        <label htmlFor="color">Color</label>
                        <select id="color" />
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id="quantity" />
                        <label htmlFor="file">File</label>
                        <input type="file" id="file" />
                        <label htmlFor="title">Job Notes</label>
                        <textarea id="title" />
                        <label>Price</label>
                        <span class="font-bold">$0.00</span>
                        <div />
                        <Button>Add to Order</Button>
                    </FormSection>
                    <H3>Summary</H3>
                    <FormSection>
                        <table class="col-span-2 mb-3 text-left">
                            <tbody>
                                <tr>
                                    <th>Job</th>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                    <th>File?</th>
                                    <th>Note</th>
                                    <th>Price</th>
                                    <th>(remove)</th>
                                </tr>
                                <tr>
                                    <td class="w-[20ch]">test</td>
                                    <td class="w-[10ch]">test</td>
                                    <td class="w-[10ch]">test</td>
                                    <td class="w-[10ch]">test</td>
                                    <td class="w-[10ch]">Yes</td>
                                    <td class="">notes here</td>
                                    <td class="w-[10ch]">$0.00</td>
                                    <td class="w-[10ch]"><button>(X)</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <label>Total</label>
                        <span class="font-bold">$0.00</span>
                        <div />
                        <Button>Place Order</Button>
                    </FormSection>
                </form>
            </Section>
        </Full>
    );
}
export default CreateOrder;