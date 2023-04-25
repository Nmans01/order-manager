import Header from "../components/Header";

function ColumnAndPane({ children }) {

    return (
        <div class="grid grid-flow-row grid-rows-[min-content_1fr]">
            <Header />
            <main class="grid grid-flow-col grid-cols-[20rem_1fr] gap-2 p-2 pt-0">
                {children}
            </main>
        </div>
    );
}
export default ColumnAndPane;