import Header from "../components/Header";

function Full({ children }) {

    return (
        <>
            <Header />
            <main class="px-2 grid grid-flow-col grid-cols-[1fr] justify-items-center items-center">
                    {children}
            </main>
        </>
    );
}
export default Full;