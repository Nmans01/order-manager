import { A, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import Modul from "../templates/Modul";

function Login() {

    const navigate = useNavigate();

    const [validEmail, setValidEmail] = createSignal(true);
    const [showHelp, setShowHelp] = createSignal(false);

    const tryLogin = (e) => {
        setValidEmail(false);
    }

    return (
        <Modul>
            <div class="grid grid-flow-row items-end gap-6 h-full py-12 w-[272px]">
                <h2 class="text-2xl justify-self-center self-start">Log in</h2>
                {
                    validEmail()
                    ||
                    <p class=" justify-self-center text-red-800">Invalid email.</p>
                }
                <label htmlFor="test" class="hover:cursor-text">
                    <div class="relative border-slate-700 border-solid border-2 p-2 pt-4">
                        <input id="test" class="bg-slate-300" type="text" />
                        <span class="absolute top-[-.7rem] left-[.1rem] bg-slate-300 px-1">Email</span>
                    </div>
                </label>
                <div class="flex flex-row justify-between w-full">
                    <button
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => (setShowHelp(!showHelp()))}
                    >
                        {
                            !showHelp()
                            ||
                            "Hide "
                        }
                        Help
                    </button>
                    <button
                        onClick={tryLogin}
                    >
                        Next
                    </button>
                </div>
                {
                    !showHelp()
                    ||
                    <p class=" justify-self-center">
                        You can log in with any valid email.<br />
                        If you don't already have an account, one will be created for you.
                    </p>
                }
            </div>
        </Modul>
    );
}
export default Login;